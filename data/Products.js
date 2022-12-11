const products = [
  {
    title: "Beef - Rouladin, Sliced",
    description: "Fusion of Right Shoulder Joint with Synth Sub, Open Approach",
    price: 147.92,
    discount: 0.33,
    imagesMain: [
      "https://robohash.org/estetet.png?size=250x250&set=set1",
      "https://robohash.org/repellatnondolorem.png?size=250x250&set=set1",
      "https://robohash.org/quiaenimblanditiis.png?size=250x250&set=set1",
      "https://robohash.org/ipsaremipsum.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/voluptatumesteligendi.png?size=50x50&set=set1",
      "https://robohash.org/nemoameteos.png?size=50x50&set=set1",
      "https://robohash.org/eosliberoqui.png?size=50x50&set=set1",
      "https://robohash.org/sintbeataeipsum.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Pork - Bacon, Sliced",
    description: "Removal of Autol Sub from Diaphragm, Open Approach",
    price: 128.48,
    discount: 0.19,
    imagesMain: [
      "https://robohash.org/atnamvelit.png?size=250x250&set=set1",
      "https://robohash.org/eavoluptatemaliquid.png?size=250x250&set=set1",
      "https://robohash.org/temporequosveniam.png?size=250x250&set=set1",
      "https://robohash.org/autvelitsed.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/cupiditatesuntdeleniti.png?size=50x50&set=set1",
      "https://robohash.org/accusantiumconsecteturquia.png?size=50x50&set=set1",
      "https://robohash.org/quiexcepturiet.png?size=50x50&set=set1",
      "https://robohash.org/suntblanditiiset.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Chestnuts - Whole,canned",
    description: "Dilation of Right Ventricle, Open Approach",
    price: 264.33,
    discount: 0.32,
    imagesMain: [
      "https://robohash.org/quameumcum.png?size=250x250&set=set1",
      "https://robohash.org/molestiaequianisi.png?size=250x250&set=set1",
      "https://robohash.org/omnisaccusantiumdoloribus.png?size=250x250&set=set1",
      "https://robohash.org/etvoluptasenim.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/animiblanditiissoluta.png?size=50x50&set=set1",
      "https://robohash.org/sedmagniet.png?size=50x50&set=set1",
      "https://robohash.org/rationeetnam.png?size=50x50&set=set1",
      "https://robohash.org/mollitiadolorumomnis.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Garbage Bags - Black",
    description: "Destruction of Right Hip Bursa and Ligament, Perc Approach",
    price: 72.23,
    discount: 0.0,
    imagesMain: [
      "https://robohash.org/etmolestiaeautem.png?size=250x250&set=set1",
      "https://robohash.org/omnisconsecteturet.png?size=250x250&set=set1",
      "https://robohash.org/adipisciinquae.png?size=250x250&set=set1",
      "https://robohash.org/estomnisdolores.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/illumtotamet.png?size=50x50&set=set1",
      "https://robohash.org/delenitinondolorem.png?size=50x50&set=set1",
      "https://robohash.org/utveniamminus.png?size=50x50&set=set1",
      "https://robohash.org/nemoipsamenim.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Rice Wine - Aji Mirin",
    description: "Occlusion of Azygos Vein, Percutaneous Endoscopic Approach",
    price: 127.65,
    discount: 0.17,
    imagesMain: [
      "https://robohash.org/temporibusquibusdamquasi.png?size=250x250&set=set1",
      "https://robohash.org/quaeratnatuset.png?size=250x250&set=set1",
      "https://robohash.org/velautemet.png?size=250x250&set=set1",
      "https://robohash.org/distinctioetminima.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/doloremharumreiciendis.png?size=50x50&set=set1",
      "https://robohash.org/utautet.png?size=50x50&set=set1",
      "https://robohash.org/quidoloremasperiores.png?size=50x50&set=set1",
      "https://robohash.org/utadipisciaut.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Grapes - Green",
    description: "Supplement L Metatarsophal Jt w Synth Sub, Perc Endo",
    price: 156.36,
    discount: 0.87,
    imagesMain: [
      "https://robohash.org/repellatquifugit.png?size=250x250&set=set1",
      "https://robohash.org/voluptateatqui.png?size=250x250&set=set1",
      "https://robohash.org/providentdoloreassumenda.png?size=250x250&set=set1",
      "https://robohash.org/voluptatemnequesunt.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/itaquedistinctioipsa.png?size=50x50&set=set1",
      "https://robohash.org/omnissimiliqueeligendi.png?size=50x50&set=set1",
      "https://robohash.org/facilismolestiaeaut.png?size=50x50&set=set1",
      "https://robohash.org/suntrepellatodio.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Tomatoes - Yellow Hot House",
    description: "Drainage of Face with Drainage Device, Perc Endo Approach",
    price: 121.62,
    discount: 0.5,
    imagesMain: [
      "https://robohash.org/aliquamautrepellendus.png?size=250x250&set=set1",
      "https://robohash.org/aliasutet.png?size=250x250&set=set1",
      "https://robohash.org/etdoloribustempore.png?size=250x250&set=set1",
      "https://robohash.org/repellatdoloresassumenda.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/perferendiseiusaut.png?size=50x50&set=set1",
      "https://robohash.org/reprehenderitquoasperiores.png?size=50x50&set=set1",
      "https://robohash.org/teneturquiearum.png?size=50x50&set=set1",
      "https://robohash.org/nemoeaest.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Skirt - 29 Foot",
    description: "Replacement of L Kidney Pelvis with Autol Sub, Open Approach",
    price: 151.47,
    discount: 0.5,
    imagesMain: [
      "https://robohash.org/quiaquiatempore.png?size=250x250&set=set1",
      "https://robohash.org/quisetrecusandae.png?size=250x250&set=set1",
      "https://robohash.org/minuseaqueearum.png?size=250x250&set=set1",
      "https://robohash.org/recusandaeautemoptio.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/voluptatibusharumullam.png?size=50x50&set=set1",
      "https://robohash.org/utsuntasperiores.png?size=50x50&set=set1",
      "https://robohash.org/temporedistinctioid.png?size=50x50&set=set1",
      "https://robohash.org/pariaturdoloressit.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Vegetable - Base",
    description: "Insert Radioact Elem in L Inguinal Region, Perc",
    price: 259.6,
    discount: 0.36,
    imagesMain: [
      "https://robohash.org/quoidreiciendis.png?size=250x250&set=set1",
      "https://robohash.org/veroetharum.png?size=250x250&set=set1",
      "https://robohash.org/illumetnesciunt.png?size=250x250&set=set1",
      "https://robohash.org/perspiciatisvoluptatemdebitis.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/perspiciatisautemnesciunt.png?size=50x50&set=set1",
      "https://robohash.org/corruptierrorexcepturi.png?size=50x50&set=set1",
      "https://robohash.org/nostrumrepellatet.png?size=50x50&set=set1",
      "https://robohash.org/aliquamnostrumut.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Silicone Paper 16.5x24",
    description: "Reposition Right Radius, Percutaneous Approach",
    price: 245.16,
    discount: 0.18,
    imagesMain: [
      "https://robohash.org/quaetemporibusvoluptas.png?size=250x250&set=set1",
      "https://robohash.org/natusreprehenderitnecessitatibus.png?size=250x250&set=set1",
      "https://robohash.org/maioresimpeditfacere.png?size=250x250&set=set1",
      "https://robohash.org/placeateoslaudantium.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/eumsuscipitnulla.png?size=50x50&set=set1",
      "https://robohash.org/pariaturquidemaccusamus.png?size=50x50&set=set1",
      "https://robohash.org/quilaudantiumaut.png?size=50x50&set=set1",
      "https://robohash.org/possimusipsaquia.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Anchovy Fillets",
    description: "Introduce Monoclonal Antibody in Bil/Panc Tract, Via Opening",
    price: 39.0,
    discount: 0.17,
    imagesMain: [
      "https://robohash.org/quiaautquis.png?size=250x250&set=set1",
      "https://robohash.org/architectorepudiandaeut.png?size=250x250&set=set1",
      "https://robohash.org/explicabonequeiusto.png?size=250x250&set=set1",
      "https://robohash.org/accusamussintrecusandae.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/inventorevoluptatesquia.png?size=50x50&set=set1",
      "https://robohash.org/doloridomnis.png?size=50x50&set=set1",
      "https://robohash.org/magniestpariatur.png?size=50x50&set=set1",
      "https://robohash.org/veritatisassumendaearum.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Milk - 2%",
    description: "Revision of Synth Sub in R Tibia, Perc Endo Approach",
    price: 172.48,
    discount: 0.72,
    imagesMain: [
      "https://robohash.org/esseerrora.png?size=250x250&set=set1",
      "https://robohash.org/consequaturconsequatursed.png?size=250x250&set=set1",
      "https://robohash.org/distinctioeaquequae.png?size=250x250&set=set1",
      "https://robohash.org/voluptaseosperferendis.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/autquoscorrupti.png?size=50x50&set=set1",
      "https://robohash.org/ducimuscupiditateofficia.png?size=50x50&set=set1",
      "https://robohash.org/quasexpeditaaliquam.png?size=50x50&set=set1",
      "https://robohash.org/officiavoluptasnostrum.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Beans - Navy, Dry",
    description: "Supplement Left Zygomatic Bone with Autol Sub, Perc Approach",
    price: 236.91,
    discount: 0.08,
    imagesMain: [
      "https://robohash.org/ipsavelitadipisci.png?size=250x250&set=set1",
      "https://robohash.org/estautemveniam.png?size=250x250&set=set1",
      "https://robohash.org/excepturirerumblanditiis.png?size=250x250&set=set1",
      "https://robohash.org/minusvoluptatemquia.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/quidemnecessitatibusat.png?size=50x50&set=set1",
      "https://robohash.org/omnistotamomnis.png?size=50x50&set=set1",
      "https://robohash.org/fuganisiet.png?size=50x50&set=set1",
      "https://robohash.org/expeditanatusquia.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Bag - Bread, White, Plain",
    description: "Repair Inferior Mesenteric Vein, Percutaneous Approach",
    price: 48.94,
    discount: 0.97,
    imagesMain: [
      "https://robohash.org/molestiaequiid.png?size=250x250&set=set1",
      "https://robohash.org/isterationeinventore.png?size=250x250&set=set1",
      "https://robohash.org/consequaturquieum.png?size=250x250&set=set1",
      "https://robohash.org/asperioresetrecusandae.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/eiusisteofficia.png?size=50x50&set=set1",
      "https://robohash.org/evenietiustoenim.png?size=50x50&set=set1",
      "https://robohash.org/sequiautquis.png?size=50x50&set=set1",
      "https://robohash.org/uteaqueharum.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Bread - Italian Roll With Herbs",
    description: "Occlusion L Hepatic Duct w Intralum Dev, Perc Endo",
    price: 179.03,
    discount: 0.98,
    imagesMain: [
      "https://robohash.org/itaquesuntrem.png?size=250x250&set=set1",
      "https://robohash.org/aliquamplaceatfugiat.png?size=250x250&set=set1",
      "https://robohash.org/necessitatibusautfugiat.png?size=250x250&set=set1",
      "https://robohash.org/quiexplicabopariatur.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/utnihilet.png?size=50x50&set=set1",
      "https://robohash.org/fugitenimnemo.png?size=50x50&set=set1",
      "https://robohash.org/estpraesentiumsit.png?size=50x50&set=set1",
      "https://robohash.org/doloresadcorporis.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Onions - Pearl",
    description: "Extraction of Left Sphenoid Sinus, Perc Endo Approach",
    price: 98.36,
    discount: 0.82,
    imagesMain: [
      "https://robohash.org/quamplaceatvelit.png?size=250x250&set=set1",
      "https://robohash.org/eosbeataequod.png?size=250x250&set=set1",
      "https://robohash.org/nihilquised.png?size=250x250&set=set1",
      "https://robohash.org/quieumid.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/iustonecessitatibusnobis.png?size=50x50&set=set1",
      "https://robohash.org/adipiscivoluptasrepellendus.png?size=50x50&set=set1",
      "https://robohash.org/quiquiasint.png?size=50x50&set=set1",
      "https://robohash.org/quiculpaut.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Cake - Dulce De Leche",
    description: "Removal of Intralum Dev from Hepatobil Duct, Extern Approach",
    price: 156.52,
    discount: 0.63,
    imagesMain: [
      "https://robohash.org/quidoloremsimilique.png?size=250x250&set=set1",
      "https://robohash.org/officianonet.png?size=250x250&set=set1",
      "https://robohash.org/aperiamquibusdamdolorem.png?size=250x250&set=set1",
      "https://robohash.org/autdeseruntaut.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/recusandaenemoincidunt.png?size=50x50&set=set1",
      "https://robohash.org/perferendismollitiaerror.png?size=50x50&set=set1",
      "https://robohash.org/sitestvoluptatum.png?size=50x50&set=set1",
      "https://robohash.org/aaccusantiumveritatis.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Clams - Bay",
    description: "Dilation of L Com Carotid, Bifurc, Open Approach",
    price: 183.52,
    discount: 0.55,
    imagesMain: [
      "https://robohash.org/earumeumquos.png?size=250x250&set=set1",
      "https://robohash.org/etlaboriosaminventore.png?size=250x250&set=set1",
      "https://robohash.org/hicsitrerum.png?size=250x250&set=set1",
      "https://robohash.org/aliquidquiofficia.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/aliquidtemporeconsequatur.png?size=50x50&set=set1",
      "https://robohash.org/iurenecessitatibussimilique.png?size=50x50&set=set1",
      "https://robohash.org/possimusrepellendussapiente.png?size=50x50&set=set1",
      "https://robohash.org/placeatsitquod.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Pasta - Lasagne, Fresh",
    description: "Drainage of Right Extraocular Muscle, Open Approach",
    price: 152.23,
    discount: 0.54,
    imagesMain: [
      "https://robohash.org/autiureipsa.png?size=250x250&set=set1",
      "https://robohash.org/quisquamtotamquidem.png?size=250x250&set=set1",
      "https://robohash.org/voluptatibusetquisquam.png?size=250x250&set=set1",
      "https://robohash.org/doloreseasaepe.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/perferendisetqui.png?size=50x50&set=set1",
      "https://robohash.org/rerumminusnobis.png?size=50x50&set=set1",
      "https://robohash.org/minimaquiaquia.png?size=50x50&set=set1",
      "https://robohash.org/nullarerumdolores.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Carbonated Water - Peach",
    description: "Resection of Head Muscle, Open Approach",
    price: 280.77,
    discount: 0.05,
    imagesMain: [
      "https://robohash.org/dictaaspernaturomnis.png?size=250x250&set=set1",
      "https://robohash.org/dolorumnisialias.png?size=250x250&set=set1",
      "https://robohash.org/minusvoluptasquia.png?size=250x250&set=set1",
      "https://robohash.org/errorsitrem.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/inabmolestias.png?size=50x50&set=set1",
      "https://robohash.org/laudantiumdebitissunt.png?size=50x50&set=set1",
      "https://robohash.org/temporautprovident.png?size=50x50&set=set1",
      "https://robohash.org/etvoluptasvoluptatem.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Mountain Dew",
    description: "Dilation of L Ulnar Art with 4+ Intralum Dev, Perc Approach",
    price: 252.34,
    discount: 0.81,
    imagesMain: [
      "https://robohash.org/iustoverovoluptatem.png?size=250x250&set=set1",
      "https://robohash.org/utataut.png?size=250x250&set=set1",
      "https://robohash.org/asperioresfaciliseos.png?size=250x250&set=set1",
      "https://robohash.org/nihilenimaliquid.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/quiteneturet.png?size=50x50&set=set1",
      "https://robohash.org/temporecorruptiet.png?size=50x50&set=set1",
      "https://robohash.org/adipisciconsequaturiste.png?size=50x50&set=set1",
      "https://robohash.org/laborumquiaearum.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Water - Perrier",
    description: "Excision of L Low Extrem Lymph, Perc Endo Approach, Diagn",
    price: 31.16,
    discount: 0.88,
    imagesMain: [
      "https://robohash.org/estsuscipitconsequatur.png?size=250x250&set=set1",
      "https://robohash.org/nihilrerumdeleniti.png?size=250x250&set=set1",
      "https://robohash.org/dignissimosfacilisnulla.png?size=250x250&set=set1",
      "https://robohash.org/eiusarchitectofugit.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/tenetursitab.png?size=50x50&set=set1",
      "https://robohash.org/officiaautut.png?size=50x50&set=set1",
      "https://robohash.org/atquequiconsequatur.png?size=50x50&set=set1",
      "https://robohash.org/repellendusnostrumdolorem.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Beef Dry Aged Tenderloin Aaa",
    description: "Fusion 2-4 L Jt w Autol Sub, Post Appr A Col, Open",
    price: 142.73,
    discount: 0.65,
    imagesMain: [
      "https://robohash.org/quamrerumillum.png?size=250x250&set=set1",
      "https://robohash.org/voluptatemundeincidunt.png?size=250x250&set=set1",
      "https://robohash.org/enimsitsed.png?size=250x250&set=set1",
      "https://robohash.org/consecteturearumaut.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/maioresmolestiaenobis.png?size=50x50&set=set1",
      "https://robohash.org/eaautimpedit.png?size=50x50&set=set1",
      "https://robohash.org/cupiditateveritatisea.png?size=50x50&set=set1",
      "https://robohash.org/numquamillumperferendis.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Sesame Seed",
    description: "Supplement Ampulla Vater with Synth Sub, Perc Endo Approach",
    price: 58.54,
    discount: 0.23,
    imagesMain: [
      "https://robohash.org/eiusdoloresconsequuntur.png?size=250x250&set=set1",
      "https://robohash.org/magnamsimiliquedolores.png?size=250x250&set=set1",
      "https://robohash.org/natusatveritatis.png?size=250x250&set=set1",
      "https://robohash.org/illumrerumaut.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/autsimiliquemolestiae.png?size=50x50&set=set1",
      "https://robohash.org/voluptatemesserepellendus.png?size=50x50&set=set1",
      "https://robohash.org/inciduntetatque.png?size=50x50&set=set1",
      "https://robohash.org/recusandaeoccaecatiquod.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Wine - Chianti Classica Docg",
    description: "Supplement L Lg Intest with Synth Sub, Perc Endo Approach",
    price: 100.69,
    discount: 0.06,
    imagesMain: [
      "https://robohash.org/idatquenihil.png?size=250x250&set=set1",
      "https://robohash.org/laborevelitexplicabo.png?size=250x250&set=set1",
      "https://robohash.org/liberoeamolestiae.png?size=250x250&set=set1",
      "https://robohash.org/estsimiliqueut.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/rerumnullaest.png?size=50x50&set=set1",
      "https://robohash.org/sedperferendisut.png?size=50x50&set=set1",
      "https://robohash.org/nesciuntsuntpariatur.png?size=50x50&set=set1",
      "https://robohash.org/quocupiditatequi.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Plaintain",
    description: "Dilation of Inf Mesent Art with 2 Drug-elut, Perc Approach",
    price: 209.16,
    discount: 0.26,
    imagesMain: [
      "https://robohash.org/placeatinmaxime.png?size=250x250&set=set1",
      "https://robohash.org/impeditautemlabore.png?size=250x250&set=set1",
      "https://robohash.org/eostemporibussed.png?size=250x250&set=set1",
      "https://robohash.org/temporasuntharum.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/perferendiseumasperiores.png?size=50x50&set=set1",
      "https://robohash.org/repudiandaeidvitae.png?size=50x50&set=set1",
      "https://robohash.org/etofficiavoluptas.png?size=50x50&set=set1",
      "https://robohash.org/sedsequiquod.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Beer - Corona",
    description: "Replace of L Ext Iliac Vein with Nonaut Sub, Open Approach",
    price: 88.56,
    discount: 0.96,
    imagesMain: [
      "https://robohash.org/doloresinimpedit.png?size=250x250&set=set1",
      "https://robohash.org/corruptidolorab.png?size=250x250&set=set1",
      "https://robohash.org/etquamhic.png?size=250x250&set=set1",
      "https://robohash.org/consecteturharumeveniet.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/temporamodidolores.png?size=50x50&set=set1",
      "https://robohash.org/cumqueutarchitecto.png?size=50x50&set=set1",
      "https://robohash.org/itaquetemporainventore.png?size=50x50&set=set1",
      "https://robohash.org/dolorassumendatempora.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Vaccum Bag 10x13",
    description: "Excision of Right Upper Leg, Percutaneous Approach, Diagn",
    price: 44.22,
    discount: 0.33,
    imagesMain: [
      "https://robohash.org/remvoluptatibusea.png?size=250x250&set=set1",
      "https://robohash.org/voluptatemdelenitiperferendis.png?size=250x250&set=set1",
      "https://robohash.org/doloremqueaccusamusdolor.png?size=250x250&set=set1",
      "https://robohash.org/aliquamvoluptatemconsequuntur.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/eumsuntiure.png?size=50x50&set=set1",
      "https://robohash.org/magnamsitsed.png?size=50x50&set=set1",
      "https://robohash.org/autemadipisciomnis.png?size=50x50&set=set1",
      "https://robohash.org/porrocommodidicta.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Muffin Orange Individual",
    description: "Repair Right Fallopian Tube, Perc Endo Approach",
    price: 44.05,
    discount: 0.89,
    imagesMain: [
      "https://robohash.org/adisteplaceat.png?size=250x250&set=set1",
      "https://robohash.org/numquameadolorem.png?size=250x250&set=set1",
      "https://robohash.org/eostotampossimus.png?size=250x250&set=set1",
      "https://robohash.org/rerumculpasit.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/teneturrerumvoluptatem.png?size=50x50&set=set1",
      "https://robohash.org/exercitationemundetenetur.png?size=50x50&set=set1",
      "https://robohash.org/voluptatemassumendanon.png?size=50x50&set=set1",
      "https://robohash.org/fugitquisit.png?size=50x50&set=set1",
    ],
  },
  {
    title: "Pasta - Cheese / Spinach Bauletti",
    description: "Release Left Foot Artery, Percutaneous Approach",
    price: 255.39,
    discount: 0.04,
    imagesMain: [
      "https://robohash.org/nequeveltempore.png?size=250x250&set=set1",
      "https://robohash.org/laudantiumpraesentiumquasi.png?size=250x250&set=set1",
      "https://robohash.org/repudiandaedolorexplicabo.png?size=250x250&set=set1",
      "https://robohash.org/perspiciatisconsecteturvitae.png?size=250x250&set=set1",
    ],
    imagesSmall: [
      "https://robohash.org/innihilearum.png?size=50x50&set=set1",
      "https://robohash.org/culpatemporefugiat.png?size=50x50&set=set1",
      "https://robohash.org/voluptasetofficia.png?size=50x50&set=set1",
      "https://robohash.org/abnamsuscipit.png?size=50x50&set=set1",
    ],
  },
];
export default products;
