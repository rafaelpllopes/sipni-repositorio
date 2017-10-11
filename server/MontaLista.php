<?php
	class MontaLista {

		public static function montar($lista, $local, $host) {
			$filenames = [];

			foreach ($lista->getLista() as $nome) {
				preg_match('/([_(])(\d{1,}.\d{1,}.\d{1,})/', $nome, $matches, PREG_OFFSET_CAPTURE);
				array_push($filenames, 
					array('url' => "http://{$host}/sipni/server/{$local}/{$nome}", 
						'versao' => $matches[2][0]
					)
				);
			}
			
			return $filenames;
		}

		public static function montarNormal($lista, $local, $host) {
			$filenames = [];

			foreach ($lista->getLista() as $nome) {
				array_push($filenames, 
					array('url' => "http://{$host}/sipni/server/{$local}/{$nome}", 
						'versao' => $nome
					)
				);
			}
			
			return $filenames;
		}
	}
?>