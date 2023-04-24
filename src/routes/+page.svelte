<script>
	import pseudos from './sitemap-0.xml/pseudos';
</script>

<svelte:head>
	<title>Ma Page privée - Page d'Accueil</title>
	<meta
		name="description"
		content={`Accéder à la page privée de nombreuses filles pour consulter sa présentation et ses photos. Elles répondent généralement aux messages privés en moins d'une heure.`}
	/>
	<meta
		name="og:description"
		content={`Accéder à la page privée de nombreuses filles pour consulter sa présentation et ses photos. Elles répondent généralement aux messages privés en moins d'une heure.`}
	/>
	<meta
		name="twitter:description"
		content={`Accéder à la page privée de nombreuses filles pour consulter sa présentation et ses photos. Elles répondent généralement aux messages privés en moins d'une heure.`}
	/>
</svelte:head>

<div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
	<div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
		<div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
			<div class="rounded-xl bg-white shadow-xl">
				<div class="p-6 sm:p-16">
					<div class="space-y-4">
						<h2 class="mb-4 text-2xl text-cyan-900 font-bold text-center">Ma Page Privée</h2>
					</div>
					<nav class="mt-16 grid space-y-4">
						{#each pseudos as pseudo, i}
							<a
								href="/{pseudo}"
								class="bg-blue-400 h-12 px-6 items-center  rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-pink-50 active:bg-blue-100 text-center text-white flex justify-center font-bold"
							>
								{i}
							</a>
						{/each}
					</nav>

					<div class="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8" />
				</div>
			</div>
		</div>
	</div>


<main>
	<section>
		<article class="py-5 w-[90%] m-auto">
			<h1 class="py-2">Rencontres en ligne en 2023: une <b>tendance croissante</b></h1>
			<p>
				Le nombre de personnes utilisant des <u>sites de rencontre en ligne</u> pour trouver des
				partenaires potentiels a considérablement augmenté au cours des dernières années, et cette
				tendance est susceptible de continuer en 2023. Selon les experts, cela est dû à une
				combinaison de facteurs, tels que l'<b>augmentation de la confiance</b> dans les rencontres
				en ligne, la facilité d'utilisation des sites de rencontre, et la
				<b>popularité croissante</b> des applications de rencontre mobile.
			</p>
		</article>

		<article class="py-5 w-[90%] m-auto">
			<h1 class="py-2">Les rencontres en ligne en 2023: une <u>plus grande diversité de choix</u></h1>
			<p>
				En 2023, les utilisateurs de sites de rencontre en ligne peuvent s'attendre à avoir accès à
				une plus grande variété de <b>options</b> pour trouver des partenaires potentiels, y compris
				des <u>sites de rencontre spécialement conçus</u> pour les personnes ayant des intérêts et
				des orientations sexuelles spécifiques, des sites de rencontre pour les personnes de
				différents âges et groupes socio-économiques, et des sites de rencontre pour les personnes à
				la recherche d'une relation sérieuse ou décontractée. Cela signifie que les utilisateurs de
				sites de rencontre en 2023 auront de <b>meilleures chances</b> de trouver des partenaires compatibles
				avec leurs préférences et leurs besoins.
			</p>
		</article>
	</section>
</main>
</div>