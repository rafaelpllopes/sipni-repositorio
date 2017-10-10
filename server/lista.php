<?php
	header('Content-Type: application/json; charset=utf-8');
	require "ListFilesNames.php";
	require "MontaLista.php";

	$acao = $_GET['pasta'];

	switch ($acao) {
		case 'win32': {
			$local = 'atualizacao/aplicacao/win32';
			$lista = new ListFilesNames($local);
			$registros = MontaLista::montar($lista, $local);
		} break;
		case 'win64': {
			$local = 'atualizacao/aplicacao/win64';
			$lista = new ListFilesNames($local);
			$registros = MontaLista::montar($lista, $local);
		} break;
		case 'lnx64': {
			$local = 'atualizacao/aplicacao/lnx64';
			$lista = new ListFilesNames($local);
			$registros = MontaLista::montar($lista, $local);
		} break;
		default: $registro = []; break;
	}	

	$json = json_encode($registros);

	echo $json;
?>