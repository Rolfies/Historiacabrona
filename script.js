document.getElementById("historiaForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const hoy = new Date().toLocaleDateString("es-MX");

  const campos = [
    ["I. Datos de Identificación", `
## Nombre: ${nombre.value}
## Edad: ${edad.value}
## Sexo: ${sexo.value}
## Fecha de nacimiento: ${fechaNacimiento.value}
## Lugar de nacimiento: ${lugarNacimiento.value}
## Estado civil: ${estadoCivil.value}
## Ocupación: ${ocupacion.value}
## Escolaridad: ${escolaridad.value}
## Dirección y teléfono: ${contacto.value}
## Fecha de hoy: ${hoy}
## Fuente: ${fuente.value}
## Fiabilidad: ${fiabilidad.value}
    `],
    ["II. Motivo de Consulta", motivo.value],
    ["III. Padecimiento Actual", padecimiento.value],
    ["IV. Antecedentes Personales Patológicos", patologicos.value],
    ["V. Antecedentes Personales No Patológicos", nopatologicos.value],
    ["VI. Antecedentes Heredofamiliares", heredofamiliares.value],
    ["VII. Interrogatorio por Aparatos y Sistemas", sistemas.value],
    ["VIII. Exploración Física", exploracion.value],
    ["IX. Resultados de Laboratorio y Gabinete", laboratorio.value],
    ["X. Impresión Diagnóstica", diagnostico.value],
    ["XI. Plan Diagnóstico y Terapéutico", plan.value],
    ["XII. Evolución y Notas de Seguimiento", evolucion.value],
    ["XIII. Pronóstico", pronostico.value]
  ];

  // Generar el contenido Markdown
  let resumen = "";
  campos.forEach(([titulo, texto]) => {
    resumen += `\n# ${titulo}\n${texto}\n`;
  });

  // Mostrarlo en la página
  document.getElementById("output").innerText = resumen;

  // Crear y descargar archivo .md
  const blob = new Blob([resumen], { type: "text/markdown;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `HistoriaClinica_${nombre.value || "Paciente"}.md`;
  link.click();
});
