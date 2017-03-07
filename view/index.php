<button id='pop'>Afficher popup</button>
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
					<p>Méthode de détection : <span id='methode'><?= $row->detection_type ?></span></p>
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
