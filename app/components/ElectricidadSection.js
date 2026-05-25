"use client";

import { useMemo, useState } from "react";

const resistivityByMaterial = {
    cobre: 1.68e-8,
    aluminio: 2.82e-8,
    plata: 1.59e-8,
    oro: 2.44e-8,
    hierro: 1.00e-7,
};

const parseNumber = (value) => {
    const parsed = Number(String(value).replace(",", "."));
    return Number.isFinite(parsed) ? parsed : undefined;
};

const getMaterialResistivity = (material) => {
    if (!material) return undefined;
    return resistivityByMaterial[String(material).trim().toLowerCase()];
};

const calcVoltage = ({ voltage, current, power, resistance }) => {
    if (voltage !== undefined) return voltage;
    if (current !== undefined && resistance !== undefined) return current * resistance;
    if (power !== undefined && current !== undefined && current !== 0) return power / current;
    if (power !== undefined && resistance !== undefined && resistance !== 0) return Math.sqrt(power * resistance);
    return undefined;
};

const calcCurrent = ({ current, voltage, power, resistance }) => {
    if (current !== undefined) return current;
    if (voltage !== undefined && resistance !== undefined && resistance !== 0) return voltage / resistance;
    if (power !== undefined && voltage !== undefined && voltage !== 0) return power / voltage;
    if (power !== undefined && resistance !== undefined && resistance !== 0) return Math.sqrt(power / resistance);
    return undefined;
};

const calcResistance = ({ resistance, voltage, current, power }) => {
    if (resistance !== undefined) return resistance;
    if (voltage !== undefined && current !== undefined && current !== 0) return voltage / current;
    if (power !== undefined && current !== undefined && current !== 0) return power / (current * current);
    if (voltage !== undefined && power !== undefined && power !== 0) return (voltage * voltage) / power;
    return undefined;
};

const calcPower = ({ power, voltage, current, resistance }) => {
    if (power !== undefined) return power;
    if (voltage !== undefined && current !== undefined) return voltage * current;
    if (current !== undefined && resistance !== undefined) return current * current * resistance;
    if (voltage !== undefined && resistance !== undefined && resistance !== 0) return (voltage * voltage) / resistance;
    return undefined;
};

const calcCapacitance = ({ capacitance, charge, voltage }) => {
    if (capacitance !== undefined) return capacitance;
    if (charge !== undefined && voltage !== undefined && voltage !== 0) return charge / voltage;
    return undefined;
};

const calcCharge = ({ charge, capacitance, voltage }) => {
    if (charge !== undefined) return charge;
    if (capacitance !== undefined && voltage !== undefined) return capacitance * voltage;
    return undefined;
};

const calcEnergyFromPower = ({ power, time }) => {
    if (power !== undefined && time !== undefined) return power * time;
    return undefined;
};

const calcEnergyInCapacitor = ({ capacitance, voltage }) => {
    if (capacitance !== undefined && voltage !== undefined) return 0.5 * capacitance * voltage * voltage;
    return undefined;
};

const calcWireResistance = ({ length, section, resistivity }) => {
    if (length !== undefined && section !== undefined && section !== 0 && resistivity !== undefined) {
        return resistivity * length / section;
    }
    return undefined;
};

export default function ElectricidadSection() {
    const [inputs, setInputs] = useState({
        voltage: "",
        current: "",
        material: "",
        resistance: "",
        charge: "",
        capacitance: "",
        length: "",
        section: "",
        time: "",
        power: "",
    });

    const values = useMemo(() => {
        const voltage = parseNumber(inputs.voltage);
        const current = parseNumber(inputs.current);
        const resistance = parseNumber(inputs.resistance);
        const charge = parseNumber(inputs.charge);
        const capacitance = parseNumber(inputs.capacitance);
        const length = parseNumber(inputs.length);
        const section = parseNumber(inputs.section);
        const time = parseNumber(inputs.time);
        const power = parseNumber(inputs.power);
        const resistivity = getMaterialResistivity(inputs.material);

        const computedVoltage = calcVoltage({ voltage, current, power, resistance });
        const computedCurrent = calcCurrent({ current, voltage, power, resistance });
        const computedResistance = calcResistance({ resistance, voltage, current, power });
        const computedPower = calcPower({ power, voltage, current, resistance });
        const computedCapacitance = calcCapacitance({ capacitance, charge, voltage });
        const computedCharge = calcCharge({ charge, capacitance, voltage });

        return {
            voltage,
            current,
            resistance,
            charge,
            capacitance,
            length,
            section,
            time,
            power,
            resistivity,
            computedVoltage,
            computedCurrent,
            computedResistance,
            computedPower,
            computedCapacitance,
            computedCharge,
            derivedVoltage: calcVoltage({ voltage: undefined, current, power, resistance }),
            derivedCurrent: calcCurrent({ current: undefined, voltage, power, resistance }),
            derivedResistance: calcResistance({ resistance: undefined, voltage, current, power }),
            derivedPower: calcPower({ power: undefined, voltage, current, resistance }),
            derivedCapacitance: calcCapacitance({ capacitance: undefined, charge, voltage }),
            derivedCharge: calcCharge({ charge: undefined, capacitance, voltage }),
            energyFromPower: calcEnergyFromPower({ power, time }),
            energyInCapacitor: calcEnergyInCapacitor({ capacitance, voltage }),
            wireResistance: calcWireResistance({ length, section, resistivity }),
        };
    }, [inputs]);

    const handleChange = (field) => (event) => {
        setInputs((prev) => ({ ...prev, [field]: event.target.value }));
    };

    return (
        <div className="electricidad-section">
            <h1>Electricidad</h1>
            <h2>Escribe para calcular</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {[
                    { label: "Voltaje (V)", name: "voltage" },
                    { label: "Corriente (A)", name: "current" },
                    { label: "Potencia (W)", name: "power" },
                    { label: "Resistencia (Ω)", name: "resistance" },
                    { label: "Carga (C)", name: "charge" },
                    { label: "Capacitancia (F)", name: "capacitance" },
                    { label: "Material", name: "material" },
                    { label: "Largo cable (m)", name: "length" },
                    { label: "Sección cable (m²)", name: "section" },
                    { label: "Tiempo (s)", name: "time" },
                ].map(({ label, name }) => (
                    <div key={name} className="voltaje-input" style={{ minWidth: 160 }}>
                        <p>{label}</p>
                        <input value={inputs[name]} onChange={handleChange(name)} type="text" />
                    </div>
                ))}
            </div>

            <div className="electricidad-results" style={{ marginTop: "1.5rem" }}>
                <h3>Resultados</h3>
                <ul>
                    <li>Voltaje ingresado: {values.voltage ?? "-"} V</li>
                    <li>Voltaje derivado: {values.derivedVoltage ?? "-"} V</li>
                    <li>Corriente ingresada: {values.current ?? "-"} A</li>
                    <li>Corriente derivada: {values.derivedCurrent ?? "-"} A</li>
                    <li>Resistencia ingresada: {values.resistance ?? "-"} Ω</li>
                    <li>Resistencia derivada: {values.derivedResistance ?? "-"} Ω</li>
                    <li>Potencia ingresada: {values.power ?? "-"} W</li>
                    <li>Potencia derivada: {values.derivedPower ?? "-"} W</li>
                    <li>Capacitancia ingresada: {values.capacitance ?? "-"} F</li>
                    <li>Capacitancia derivada: {values.derivedCapacitance ?? "-"} F</li>
                    <li>Carga ingresada: {values.charge ?? "-"} C</li>
                    <li>Carga derivada: {values.derivedCharge ?? "-"} C</li>
                    <li>Energía (P × t): {values.energyFromPower ?? "-"} J</li>
                    <li>Energía en capacitor: {values.energyInCapacitor ?? "-"} J</li>
                    <li>Resistividad usada: {values.resistivity ?? "-"} Ω·m</li>
                    <li>Resistencia del cable: {values.wireResistance ?? "-"} Ω</li>
                </ul>
            </div>
        </div>
    );
}
