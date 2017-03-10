<div class="container">
	<div class="presentation">
		<div class="row justify-content-center">
			<p>Bienvenue Voyageur, tu pourras à travers ce site découvrir ou redécouvrir les exo-planètes
			recencées.</p>
		</div>
		<div class="row justify-content-center">
			<p>Si tu veux te laisser guider dans l'immensitée de l'espace c'est par ici  <button id='pop'>Afficher popup</button></p>
		</div>
		<div class="row justify-content-center">
			<p>Tu peux aussi affiner tes recherches en nous disant les planètes que tu préfères voir. </p>
		</div>
		<div class="row justify-content-center">
			<p id="choixSelect">Tu as choisi <span id="methodde"></span><span id="multiSelect"></span><span id="selectt"></span></p>
		</div>
		<div class="selectionParametre">
			<div class="row">
				<div class="parametre col-md-2">
					<p class="facteur" id="facteurMasse">Par masse</p>
					<img class="plus" select="poidDesc" id="imagePoid" src="view/images/kilo.png" alt="">
					<img class="moins" select="poidAsc" id="imagePlume" src="view/images/plume.png" alt="">
				</div>
				<div class="parametre col-md-1">
					<p>ou</p>
				</div>
				<div class="parametre col-md-2">
					<p class="facteur" id="facteurTemp">Par Température</p>
					<img class="plus" select="tempDesc" id="imageChaud" src="view/images/chaleur.png" alt="">
					<img class="moins" select="tempAsc" id="imageFroid" src="view/images/flocon.png" alt="">
				</div>
				<div class="parametre col-md-1">
					<p>ou</p>
				</div>
				<div class="parametre col-md-2">
					<p class="facteur" id="facteurAnnee">Par année de découverte</p>
					<img class="plus" select="anneeDesc" id="imageVieux" src="view/images/dino.png" alt="">
					<img class="moins" select="anneeAsc" id="imageJeune" src="view/images/alien.png" alt	="">
				</div>
				<div class="parametre col-md-1">
					<p>et / ou</p>
				</div>
				<div class="parametre col-md-2">
					<p class="facteur" id="methodeRecherche">Par méthode de découverte</p>
					<p methode="Primary" class="pMethodeRecherche">Transit</p>
					<p methode="Radial" class="pMethodeRecherche">Vitesse Radiale</p>
					<p methode="Imaging" class="pMethodeRecherche">Microlentille Gravitationnelle</p>
				</div>
			</div>
			<div class="row justify-content-center">
				<form class="" action="" method="post" id="formSelect">
					<input type="hidden" name="select" value="" id="select"/>
					<input type="hidden" name="methode" value="" id="methode"/>
					<input type="hidden" name="count" value="" id="count" />
					<button class="buttonRecherche" type="button" name="button" id='annulerRecherche'>Annuler la sélection de recherche</button>
					<button class="buttonRecherche" type="submit" name="selection" id="selection">Envoyer</button>
				</form>
			</div>
		</div>
	</div>
<div id="popup" class="">
	<?php	include ("controller/get_methods.php"); ?>
	<img id="close" src='view/images/close.png'>
		<?php foreach ($result as $row) :?>
		<div class='planetdata'>
			<div class='row'>
					<div class='offset-md-1 col-md-3' id='picture'>
						<img src=''>
					</div>
					<div class='data1 offset-md-2 col-md-6'>
					<p id='id'><span id='idplanet'><?= $row->id ?></span></p>
					<p>Nom :<span id='nom'><?= $row->nom ?></span></p>
					<p>Année de découverte : <span id='annee'><?= $row->discovered ?></span></p>
					<p>Méthode de détection : <span id='methodeeee'><?= $row->detection_type ?></span></p>
					<p>Système stellaire : <span id='systeme'><?= $row->star_name ?></span></p>
					<?php $sister = $planete->getSameStarPlanete($row->star_name); ?>
					<p>Planète(s) soeur(s)</p>
					<?php foreach ($sister as $sis) :?>

						<p><span id='samestarplanets'<?= $sis->nom ?></p>
					<?php endforeach; ?>
					</div>
			</div>
			<div class='data2 row'>
				<div class='offset-md-1 col-md-4'>
				<p class='titre'>Données planétaires</p>
					<p>Masse : <span id='masse'><?= $row->mass ?> M(jupiter)</span></p>
					<p>Rayon : <span id='rayon'><?= $row->radius ?> R(jupiter)</span></p>
					<p>Période orbitale : <span id='periode'><?= $row->orbital_period ?></span></p>
					<p>Température
					<?php if($row->temp_calculated != '0'){ ?>

						calculée : <span id='tcalc'><?= $row->temp_calculated ?>K</span></p>

					<?php }elseif($row->temp_measured != '0') { ?>

						mesurée : <span id='tmes'><?= $row->temp_measured ?>K</span></p>
					<?php }else{?>
						: Non défini </p>
					<?php }?>

					<p>Molécules détectées : <span id='molecules'><?= $row->molecules ?></span></p>
				</div>
				<div class='offset-md-1 col-md-6'>
					<div class='stardata'>
					<p class='titre'>Données stellaires</p>
					<p>Nom : <span id='starnom'><?= $row->star_name ?></span></p>
					<p>Distance planète-étoile : <span id='distance'><?= $row->star_distance ?> parsec(s)</span></p>
					<p>Age : <span id='starage'><?= $row->star_age ?> Ga</span></p>
					<p>Masse : <span id='starmasse'><?= $row->star_mass ?> M(soleil)</span></p>
					<p>Rayon : <span id='starrayon'><?= $row->star_radius ?> R(soleil)</span></p>
					<p>Température : <span id='startemp'><?= $row->star_teff ?> K</span></p>
					<p>Type spectral : <span id='type'><?= $row->star_sp_type ?> K<span></p>
					</div>
				</div>
			</div>
		</div>

		<button id='next' id_next="<?=$row->id+1?>">Planète Suivante</button>
		<button id='prev' id_prev="<?=$row->id-1?>">Planète Précédente</button>
		</div>
		<?php endforeach; ?>
</div>
