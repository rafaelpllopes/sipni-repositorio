<?php
	class MontaLista {

		public static function montar($lista, $local) {
			$filenames = [];

			foreach ($lista->getLista() as $nome) {
				preg_match('/([_(])(\d{1,}.\d{1,}.\d{1,})/', $nome, $matches, PREG_OFFSET_CAPTURE);
				array_push($filenames, 
					array('url' => "http://localhost/sipni-repositorio/server/{$local}/{$nome}", 
						'versao' => $matches[2][0]
					)
				);
			}

			return $filenames;
		}
	}
?>