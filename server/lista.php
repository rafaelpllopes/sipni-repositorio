<?php
	header('Content-Type: application/json; charset=utf-8');
	require "ListFilesNames.php";
	require "MontaLista.php";

	$host = $_SERVER['HTTP_HOST'];

	$acao = $_GET['pasta'];

	switch ($acao) {
		case 'win32': {
			$local = 'atualizacao/aplicacao/win32';
			$lista = new ListFilesNames($local);
			$registros = MontaLista::montar($lista, $local, $host);
		} break;
		case 'win64': {
			$local = 'atualizacao/aplicacao/win64';
			$lista = new ListFilesNames($local);
			$registros = MontaLista::montar($lista, $local, $host);
		} break;
		case 'lnx64': {
			$local = 'atualizacao/aplicacao/lnx64';
			$lista = new ListFilesNames($local);
			$registros = MontaLista::montar($lista, $local, $host);
		} break;

		case 'db': {
			$local = 'atualizacao/db';
			$lista = new ListFilesNames($local);
			$registros = MontaLista::montar($lista, $local, $host);
		} break;

		case 'inst': {
			$local = 'atualizacao/instancias';
			$lista = new ListFilesNames($local);
			$registros = MontaLista::montar($lista, $local, $host);
		} break;

		case 'bairros': {
			$local = 'atualizacao/bairros';
			$lista = new ListFilesNames($local);
			$registros = MontaLista::montarNormal($lista, $local, $host);
		} break;

		case 'uteis': {
			$local = 'atualizacao/uteis';
			$lista = new ListFilesNames($local);
			$registros = MontaLista::montarNormal($lista, $local, $host);
		} break;
		default: $registro = []; break;
	}	

	$json = json_encode($registros);

	echo $json;
?>