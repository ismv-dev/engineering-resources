import { list, head, get } from '@vercel/blob';
import { NextResponse } from 'next/server';

async function getBlobs(path) {
  const { blobs } = await list();
  
  return blobs
    .filter(blob => blob.pathname.startsWith(`${path}/`))
    .map(blob => ({
      url: blob.url,
      pathname: blob.pathname,
      size: blob.size,
      uploadedAt: blob.uploadedAt
    }));
}

export async function GET(request: Request) {
  // 1. AQUI: Implementa tu lógica de autenticación (ej: getAuth(request))
  // if (!usuarioAutenticado) return new Response("No autorizado", { status: 401 });

  const { searchParams } = new URL(request.url);
  const blobUrl = searchParams.get('url');

  if (!blobUrl) return new Response("Falta URL", { status: 400 });

  try {
    // 2. Obtener el blob usando el token privado
    // Pass required options object (access level) as second argument
    const result = await get(blobUrl, { access: 'private' });

    if (!result) return new Response("No encontrado", { status: 404 });

    // If the blob is not modified (304), return 304 with headers
    if (result.statusCode === 304) {
      const hdrObj = {};
      // result.headers is an Undici Headers; convert to plain object
      (result.headers as any).forEach((v: string, k: string) => { hdrObj[k] = v; });
      return new NextResponse(null, { status: 304, headers: hdrObj });
    }

    // For 200 responses, `stream` contains the readable stream
    const body = result.stream;
    if (!body) return new Response("No se pudo obtener el contenido del blob", { status: 500 });

    const hdrObj: Record<string,string> = {};
    (result.headers as any).forEach((v: string, k: string) => { hdrObj[k] = v; });
    if (!hdrObj["content-type"]) hdrObj["content-type"] = "application/pdf";
    hdrObj["content-disposition"] = `inline; filename="documento.pdf"`;

    return new NextResponse(body, { headers: hdrObj });
  } catch (error) {
    return new Response("Error al obtener el archivo", { status: 500 });
  }
}
