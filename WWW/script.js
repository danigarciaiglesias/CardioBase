<script type="text/javascript">
	$(document).ready(function(){
		$("#boton").click(function () {

			var NHistoria = $('input:text[name=NHistoria]').val();
			var nombre = $('input:text[name=nombre]').val();
			var apellido1 = $('input:text[name=apellido1]').val();
			var apellido2 = $('input:text[name=apellido2]').val();
			var FNacimientoDia = $('input:text[name=FNacimientoDia]').val();
			var FNacimientoMes = $('input:text[name=FNacimientoMes]').val();
			var FNacimientoAno = $('input:text[name=FNacimientoAno]').val();
			var sexo = $('radio:radio[name=sexo]:checked').val();
			var HIAM = $('input:radio[name=HIAM]:checked').val();
			var HAngor = $('input:radio[name=HAngor]:checked').val();
			var HIC = $('input:radio[name=HIC]:checked').val();
			var HDV = $('input:radio[name=HDV]:checked').val();
			var HFEVI = $('input:text[name=HFEVI]').val();
			var HValvular = $('input:radio[name=HValvular]:checked').val();
			var HCHipertensiva = $('input:radio[name=HCHipertensiva]:checked').val();
			var HFA = $('input:radio[name=HFA]:checked').val();
			var HACTP = $('input:radio[name=HACTP]:checked').val();
			var HCABG = $('input:radio[name=HCABG]:checked').val();
			var HFumador = $('input:radio[name=HFumador]:checked').val();
				if (HFumador == "si"){
					var HFumadorMostrar = "Fumador. ";}
				else {
					var HFumadorMostrar = "No Fumador. ";}
			var HHTA = $('input:radio[name=HHTA]:checked').val();
				if (HHTA == "si"){
					var HHTAMostrar = "Hipertensión Arterial. ";}
				else {
					var HHTAMostrar = "Sin antecedentes de Hipertensión Arterial. ";}
			var HDM = $('input:radio[name=HDM]:checked').val();
				if (HDM == "si"){
					var HDMMostrar ="Diabetes Mellitus. ";}
				else {
					var HDMMostrar ="Sin Antecedentes de Diabetes Mellitus. ";}
			var HDL = $('input:radio[name=HDL]:checked').val();
				if (HDL == "si"){
					var HDLMostrar = "Dislipemia. ";}
				else {
					var HDLMostrar = "No Dislipemia. ";}
			var HFamiliar = $('input:radio[name=HFamiliar]:checked').val();
			var HACV = $('input:radio[name=HACV]:checked').val();
				if (HACV == "si"){
					var HACVMostrar = "Historia previa de ACV. ";}
				else {
					var HACVMostrar = "";}
			var HEVP = $('input:radio[name=HEVP]:checked').val();
				if (HEVP == "si"){
					var HEVPMostrar = "Antecedentes de Enfermedad Vascular periférica. ";}
				else {
					var HEVPMostrar = "";}
			var HERC = $('input:radio[name=HERC]:checked').val();
				if (HERC == "si"){
					var HERCMostrar = "Enfermedad Renal Crónica. ";}
				else {
					var HERCMostrar = "";}
			var HPulmonar = $('input:radio[name=HPulmonar]:checked').val();
				if (HPulmonar == "si"){
					var HPulmonarMostrar = "Antecedentes de patología Pulmonar crónica. ";}
				else {
					var HPulmonarMostrar = "";}
			var AntecedentesPersonalesOtros = $('textarea[name=AntecedentesPersonalesOtros]').val();
			var TtoPreAntiagregacion = $('input:radio[name=TtoPreAntiagregacion]:checked').val();
			var TtoPreACO = $('input:radio[name=TtoPreACO]:checked').val();
			var TtoPreBb = $('input:radio[name=TtoPreBb]:checked').val();
			var TtoPreIECAARA = $('input:radio[name=TtoPreIECAARA]:checked').val();
			var TtoPreAntialdosteronicos = $('input:radio[name=TtoPreAntialdosteronicos]:checked').val();
			var TtoPreDiureticos = $('input:radio[name=TtoPreDiureticos]:checked').val();
			var TtoPreNitratos = $('input:radio[name=TtoPreNitratos]:checked').val();
			var TtoPreAntagonistasCalcio = $('input:radio[name=TtoPreAntagonistasCalcio]:checked').val();
			var TtoPreInsulina = $('input:radio[name=TtoPreInsulina]:checked').val();
			var TtoPreADO = $('input:radio[name=TtoPreADO]:checked').val();
			var TtoPreEstatina = $('input:radio[name=TtoPreEstatina]:checked').val();
			var TratamientoPrevio = $('textarea[name=TratamientoPrevio]').val();
			var MotivoConsulta = $('input:text[name=MotivoConsulta]').val();
			var EnfermedadActual = $('textarea[name=EnfermedadActual]').val();
			var IngresoInicioClinicaDia = $('input:text[name=IngresoInicioClinicaDia]').val();
			var IngresoInicioClinicaMes = $('input:text[name=IngresoInicioClinicaMes]').val();
			var IngresoInicioClinicaAno = $('input:text[name=IngresoInicioClinicaAno]').val();
			var IngresoInicioClinicaHora = $('input:text[name=IngresoInicioClinicaHora]').val();
			var IngresoInicioClinicaMinutos = $('input:text[name=IngresoInicioClinicaMinutos]').val();
			var IngresoFechaDia = $('input:text[name=IngresoFechaDia]').val();
			var IngresoFechaMes = $('input:text[name=IngresoFechaMes]').val();
			var IngresoFechaAno = $('input:text[name=IngresoFechaAno]').val();
			var IngresoFechaHora = $('input:text[name=IngresoFechaHora]').val();
			var IngresoFechaMinutos = $('input:text[name=IngresoFechaMinutos]').val();
			var IngresoTAS = $('input:text[name=IngresoTAS]').val();
			var IngresoTAD = $('input:text[name=IngresoTAD]').val();
			var IngresoFC = $('input:text[name=IngresoFC]').val();
			var IngresoKillip = $('input:text[name=IngresoKillip]').val();
			var ExploracionFisicaNormal = $('input:radio[name=ExploracionFisicaNormal]:checked').val();
				if (ExploracionFisicaNormal == "si"){
					var ExploracionFisica = "SatO2 99%, PVC normal, Afebril. Auscultación cardiaca rítmica y sin soplos. Auscultación Pulmonar con Murmullo vesicular conservado, sin ruidos sobreanadidos. Abdomen anodino. Miembros inferiores sin edemas ni signos de trombosis venosa. Pulsos periféricos presentes y simétricos, sin soplos a nivel carotideo, abdominal o femoral.";}
				else{
					var ExploracionFisica = $('textarea[name=ExploracionFisica]').val();}
			var IngresoECGRitmoSinusal = $('input:radio[name=IngresoECGRitmoSinusal]:checked').val();
			var IngresoECGFrecuencia = $('input:text[name=IngresoECGFrecuencia]').val();
			var IngresoECGRegistroTaquiArritmia = $('input:radio[name=IngresoECGRegistroTaquiArritmia]:checked').val();
			var IngresoECGRegistroBradiArritmia = $('input:radio[name=IngresoECGRegistroBradiArritmia]:checked').val();
			var IngresoECGBloqueoRI = $('input:radio[name=IngresoECGBloqueoRI]:checked').val();
			var IngresoECGAltOndaT = $('input:radio[name=IngresoECGAltOndaT]:checked').val();
			var IngresoECGAltST = $('input:radio[name=IngresoECGAltST]:checked').val();
			var IngresoECGLocalizacion = $('input:text[name=IngresoECGLocalizacion]').val();
			var IngresoECGDescripcion = $('input:text[name=IngresoECGDescripcion]').val();
			var RxTorax = $('input:text[name=RxTorax]').val();
			var IngresoEzElevadas = $('input:radio[name=IngresoEzElevadas]:checked').val();
			var IngresoCK = $('input:text[name=IngresoCK]').val();
			var IngresoTn = $('input:text[name=IngresoTn]').val();
			var IngresoGlcIngreso = $('input:text[name=IngresoGlcIngreso]').val();
			var IngresoUrea = $('input:text[name=IngresoUrea]').val();
			var IngresoCr = $('input:text[name=IngresoCr]').val();
			var IngresoNa = $('input:text[name=IngresoNa]').val();
			var IngresoK = $('input:text[name=IngresoK]').val();
			var IngresoHb = $('input:text[name=IngresoHb]').val();
			var IngresoHto = $('input:text[name=IngresoHto]').val();
			var IngresoPFHAlteradas = $('input:radio[name=IngresoPFHAlteradas]:checked').val();
			var IngresoDiagnostico = $('textarea[name=IngresoDiagnostico]').val();
			var IngresoPlan = $('textarea[name=IngresoPlan]').val();

			$("#introducir").append();

			$("#inicio").append("Inicio");

			$("#MotivoConsulta").append("MOTIVO DE CONSULTA:<br>" + MotivoConsulta);
			$("#AntecedentesPersonales").append("ANTECEDENTES PERSONALES: <br>" + HFumadorMostrar + HHTAMostrar + HDMMostrar + HDLMostrar + HACVMostrar + HEVPMostrar + HERCMostrar + HPulmonarMostrar + AntecedentesPersonalesOtros);
			$("#EnfermedadActual").append("ENFERMEDAD ACTUAL:<br>" + EnfermedadActual);
			$("#ExploracionFisica").append("EXPLORACIÓN FÍSICA:<br>TA: " + IngresoTAS + "/"+ IngresoTAD+ " mmHg, FC: " + IngresoFC + " lpm, " + ExploracionFisica);
			$("#PruebasComplementarias").append("PRUEBAS COMPLEMENTARIAS:<br>ECG: " + IngresoECGDescripcion + ".<br>Radiografía de Tórax: " + RxTorax + ".<br>Analítica: Glucosa: " + IngresoGlcIngreso + " mg/dl, Urea: " + IngresoUrea + " mg/dl, Creatinina: " + IngresoCr + " mg/dl, Na: " + IngresoNa + " mEg/l, K: " + IngresoK + " mEq/l, Troponina T: " + IngresoTn + " ng/dl, Creatinina Kinasa: " + IngresoCK + " mg/dl. Hematocrito: " + IngresoHto + "%, Hemoglobina: " + IngresoHb + " mg/dl.");
			$("#Diagnostico").append("DIAGNÓSTICO DE INGRESO: <br>" + IngresoDiagnostico);
			$("#Plan").append("PLAN: <br>" + IngresoPlan);
			$("#salto1").append("<br>");
			$("#variables").append("<p>NHistoria;Nombre;apellido1;apellido2;FNacimientoDia;FNacimientoMes;FNacimientoAno;sexo;HIAM;HAngor;HIC;HDV;HFEVI;HValvular;HCHipertensiva;HFA;HACTP;HCABG;HFumador;HHTA;HDM;HDL;HFamiliar;HACV;HEVP;HERC;HPulmonar;AntecedentesPersonalesOtros;TtoPreAntiagregacion;TtoPreACO;TtoPreBb;TtoPreIECAARA;TtoPreAntialdosteronicos;TtoPreDiureticos;TtoPreNitratos;TtoPreAntagonistasCalcio;TtoPreInsulina;TtoPreADO;TtoPreEstatina;TratamientoPrevio;MotivoConsulta;EnfermedadActual;IngresoInicioClinicaDia;IngresoInicioClinicaMes;IngresoInicioClinicaAno;IngresoInicioClinicaHora;IngresoInicioClinicaMinutos;IngresoFechaDia;IngresoFechaMes;IngresoFechaAno;IngresoFechaHora;IngresoFechaMinutos;IngresoTAS;IngresoTAD;IngresoFC;IngresoKillip;ExploracionFisicaNormal;ExploracionFisica;IngresoECGRitmoSinusal;IngresoECGFrecuencia;IngresoECGRegistroTaquiArritmia;IngresoECGBloqueoRI;IngresoECGAltST;IngresoECGAltOndaT;IngresoECGLocalizacion;IngresoECGDescripcion;RxTorax;IngresoEzElevadas;IngresoCK;IngresoTn;IngresoGlcIngreso;IngresoUrea;IngresoCr;IngresoNa;IngresoK;IngresoHb;IngresoHto;IngresoPFHAlteradas;IngresoDiagnostico;IngresoPlan");
			$("#valores").append(NHistoria + ";" + nombre + ";" + apellido1 + ";" + apellido2 + ";" + FNacimientoDia + ";" + FNacimientoMes + ";" + FNacimientoAno + ";" + sexo + ";" + HIAM + ";" + HAngor + ";" + HIC + ";" + HDV + ";" + HFEVI + ";" + HValvular + ";" + HCHipertensiva + ";" + HFA + ";" + HACTP + ";" + HCABG + ";" + HFumador + ";" + HHTA + ";" + HDM + ";" + HDL + ";" + HFamiliar + ";" + HACV + ";" + HEVP + ";" + HERC + ";" + HPulmonar + ";" + AntecedentesPersonalesOtros + ";" + TtoPreAntiagregacion + ";" + TtoPreACO + ";" + TtoPreBb + ";" + TtoPreIECAARA + ";" + TtoPreAntialdosteronicos + ";" + TtoPreDiureticos + ";" + TtoPreNitratos + ";" + TtoPreAntagonistasCalcio + ";" + TtoPreInsulina + ";" + TtoPreADO + ";" + TtoPreEstatina + ";" + TratamientoPrevio + ";" + MotivoConsulta + ";" + EnfermedadActual + ";" + IngresoInicioClinicaDia + ";" + IngresoInicioClinicaMes + ";" + IngresoInicioClinicaAno + ";" + IngresoInicioClinicaHora + ";" + IngresoInicioClinicaMinutos + ";" +  + ";" + IngresoFechaDia + ";" + IngresoFechaMes + ";" + IngresoFechaAno + ";" + IngresoFechaHora + ";" + IngresoFechaMinutos + ";" + IngresoTAS + ";" + IngresoTAD + ";" + IngresoFC + ";" + IngresoKillip + ";" + ExploracionFisicaNormal + ";" + ExploracionFisica + ";" + IngresoECGRitmoSinusal + ";" + IngresoECGFrecuencia + ";" + IngresoECGRegistroTaquiArritmia + ";" + IngresoECGBloqueoRI + ";" + IngresoECGAltST + ";" + IngresoECGAltOndaT + ";" + IngresoECGLocalizacion + ";" + IngresoECGDescripcion + ";" + RxTorax + ";" + IngresoEzElevadas + ";" + IngresoCK + ";" + IngresoTn + ";" + IngresoGlcIngreso + ";" + IngresoUrea + ";" + IngresoCr + ";" + IngresoNa + ";" + IngresoK + ";" + IngresoHb + ";" + IngresoHto + ";" + IngresoPFHAlteradas + ";" + IngresoDiagnostico + ";" + IngresoPlan + ";");
			$("#salto2").append("<br>");
			$("#fin").append("Fin");
		});
	});
</script>
