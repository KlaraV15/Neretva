import Put from '../Slike/kartaNeretve.jpg';
import Metkovic from '../Slike/metkovic.jpg';
import Delta from '../Slike/deltaNeretve.jpg';
import Zivotinje from '../Slike/zivotinje.jpg';
import Prud from '../Slike/prud.jpg';
import Maraton from '../Slike/mara.jpg';
import Opuzen from '../Slike/opuzen.jpg';
import Parila from '../Slike/parila.jpg';
import { Link } from 'react-router-dom';


function Naslovna() {
    return (
        <div className="naslovna">
            <div className="background">

                <div className="content">
                    <h1>Rijeka Neretva</h1>
                    <div className="neretva">


                        <p>
                            Neretva je jedina velika delta u našoj zemlji. To je takvo ušće rijeke koje se proširuje u more gdje rijeka taloži velike količine sedimenta. Kao i mnoga ostala područja, cijelo je područje konačno oblikovano nakon kraja zadnjeg ledenog doba, prije otprilike 10 000 godina. Uslijed zatopljavanja klime, zbog otapanja i povlačenja velikih ledenjaka, podigla se je razina mora te je premjestila ušće u blizinu Pelješca gdje se danas nalazi. Tako je nastala dolina s deltom sadašnjeg izgleda.
                        </p>
                    </div>

                    <div className='iframe-container'>
                        <iframe width="1200" height="600" src="https://www.youtube.com/embed/QAFNu8VTiLk?si=ZOWpHutws2JKp3zc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className='ruta'>
                        <div className='slika'>
                            <img src={Put}></img>
                        </div>
                        <div className='tekst'>
                            <p>
                                Neretva u Hrvatsku pristiže nakon 203 kilometra u BiH. Izvire 1095 metara nad morem ispod planina Zelengore i Lebršnik u krševitom kraju. Pomalo se spušta hercegovačkim kršem, teče prvo od jugoistoka prema sjeverozapadu, no kod Konjica skreće prema jugu. U svom planinskom dijelu ova veličanstvena rijeka teče kanjonom, mjestimice vrlo divljim. Neretva je ovdje tipična alpska rijeka, okružuju je visoke planine Prenj, Visočica i Bjelašnica čiji vrhovi dosežu preko 2000 m visine. Rijeka prima brojne pritoke, među kojima Rakitnicu, čiji kanjon je dubok zapanjujućih 1000 metara. Od Jablanice do Čapljine Neretva je ukroćena nizom akumulacijskih jezera. Kod Čapljine pomalo izlazi iz kanjona i tako sve šira teče prema Hrvatskoj. Već u BiH ona je na ravnijem tlu i stvara široku dolinu.
                            </p>
                        </div>
                    </div>


                    <div className="slatkovodna">
                        <h2>Mediteranska slatkovodna močvara</h2>
                        <div className='mtk'>
                            <div className='tekst'>

                                <p>
                                    <Link to='/metkovic'>Metković</Link> je prva stanica Neretve u Hrvatskoj. Ovaj gradić se cijelom dužinom razvio uz rijeku i sa svojih 15 000 stanovnika čini središte doline Neretve. Da bi se došlo do starijeg dijela grada treba se malo potruditi i popeti na brdo Predolac gdje je izgrađen. Južne padine brda bile su zaštita od bure i davale su mnogo sunca. Možda su ponajviše štitile od poplava koje su 1422., kada je podignut, često posjećivale niži dio doline.
                                </p>
                                <p>
                                    S Predolca se pruža dobar pogled i na Pelješac, ali naročito na zelenu dolinu posvuda oko grada. To ravno područje izravnala je sama Neretva tako što je sedimentom skoro ravnomjerno popunila sve tadašnje depresije. Rijeka je, naime, erodirala uzvodna područja u Hercegovini i taj smrvljeni sediment nosila sa sobom. U dolini bi nastajale poplave gdje bi voda gubila snagu i usred krša taložila ogromne količine tog sedimenta, odnosno mekane zemlje. Tako je u kršu nastala aluvijalna ravnica, odnosno poplavno područje nepravilnog oblika s tri trokutasta proširenja od kojih je prvi u BiH, a ostala dva su u Hrvatskoj: čapljinski, metkovićki i opuzenski bazen; omeđeni su višim krškim brdima koje rijeka nije mogla plaviti.
                                </p>
                            </div>
                            <div className='slika'>
                                <img src={Metkovic}></img>
                            </div>
                        </div>
                        <div className='deltaNeretve'>
                            <div className='slika'>
                                <img src={Delta}></img>
                            </div>
                            <div className='tekst'>
                                <p>
                                    Kroz mekani sediment lako je krčila sebi put, premještajući često tok za vrijeme bujica i granajući se u lepezu rukavaca, koja podsjeća na grčko slovo „delta“: Δ. Usred aluvijalne ravnice još uvijek stoje mali vapnenački brežuljci iznad razine poplava. Takav je Predolac u Metkoviću, ali se još više ističe Vid tek nekoliko kilometara dalje. S njega puca pogled na okolicu, ali i samo brdo sa selom je isto tako zanimljivo. Na samom vrhu je crkva Sv. Vida iz 14. stoljeća, sada obnovljena i arheološki istražena. Selo je nastalo na temeljima antičkog grada Narone, podigli su ga Grci kao trgovačko središte (emporij) za ovaj dio Jadrana, a po osvajanju su ga preuzeli Rimljani kao strateški važno mjesto u borbi s Ilirima. Preko Ilira povijest doline Neretve seže još i dalje u prošlost, sve do paleolita.
                                </p>
                            </div>
                        </div>
                        <div className='vid'>
                            <p>
                                Vid se s jedne strane drži za kršku padinu, no s ostalih strana je okružen zelenom ravnicom. Spusti li se do samog njenog ruba vidi sa da je to nepregledno polje trske, rogoza, šašine i ostalog visokog močvarnog bilja. Razgrnu li se malo visoke stabljike, otkriva se u podnožju plitka voda i mulj. Ipak, ni tu vodena površina nije potpuno gola već je prekriva vodena leća, lopoč, žuti lokvanj…
                            </p>
                        </div>
                        <div className='zivotinje'>
                            <div className='tekst'>
                                <p>
                                    Močvara je također savršeno mjesto za mnoge male ptice močvarice koje u trsci nalaze dom i gnjezdište, pa tu vladaju trstenjaci i slične ptice vezane uz trsku. Na vodi oprezno plivaju mlakuše, kokošice, bukavac. Otvorenu vodu više vole patke i liske. Rijetka vrsta pataka, njorke, ovdje se i gnijezde. S povišenog položaja mogu se vidjeti bazenčići otvorene vode – plane. Nastali su umjetno: načinili su ih lovci koji, dakako, uzimaju svoj danak, no zbog regulacije Neretva je izgubila sposobnost otvaranja novih vodenih površina pa je ovakva aktivnost značajna za održanje ptica močvarica. Sličnu ulogu imaju melioracijski kanali, nastali iskapanjem mulja.
                                </p>
                            </div>
                            <div className='slika'>
                                <img src={Zivotinje}></img>
                            </div>
                        </div>

                    </div>
                    <div className="dolina">
                        <h2>Meliorirana dolina Neretve</h2>
                        <div className='prud'>
                            <div className='slika'>
                                <img src={Prud}></img>
                            </div>
                            <div className='tekst'>
                                <p>
                                    Sama rijeka Neretva regulirana je i nije zanimljiva sa stanovišta prirode, već je danas svedena na kanal. Upravo kanali i rječice diktiraju izgled Neretve, a nalazimo ih gotovo posvuda. Jedna od tih rječica je Norin, čiji tok se lako prati po tamnozelenoj liniji vrba i topola koje stoje usred jednoličnog svijetlozelenog polja trske. Ipak, najbolje ju je istražiti čamcem. Svijet je ovdje malen, svega nekoliko metara rijeke koju omeđuje zeleni prirodni zid vegetacije. <Link to='/norin'>Rijeka Norin</Link> (ili Norilj kako je zovu u Prudu) izvire u Prudu, a ulijeva se u Neretvu kod kule Norinske, 4 km nizvodno od Metkovića. Još nekoliko rječica izvire i kratko teče oko Neretve, a uz njih treba spomenuti i rukavce s lijeve strane Neretve, to su Mala Neretva, Crepina, Rečina, Jarčilog, Jasenska te ostaci negdašnjega glavnog korita koje se u današnjoj luci Ploče ulijevalo u more: Desanka, Crna rijeka, Vlaška.
                                </p>
                            </div>
                        </div>
                        <div className='mara'>
                            <div className='tekst'>
                                <p>
                                    Nekad nije bilo pravih cesta, tlo je bilo mekano i pod utjecajem rijeka pa su glavni putovi bili vodeni. Stoga je i prijevozno sredstvo bilo plovilo i to dvije vrste: „lađa“ i „trupa“. Sedam metara dugačke, a široke čak i do tri metra, lađe su bile teretni čamci za prijevoz poljoprivrednih proizvoda i stoke. Pokretale su se veslanjem, ali i vučenjem pomoću dugačkih konopaca s obale. Na mnogo uže i elegantnije trupe stao bi jedan ili dva čovjeka. Ova tradicionalna plovila još se i danas koriste, no dakako manje nego prije. Ipak, da bi obnovili tradiciju i privukli turiste, Neretljani su pokrenuli Maraton lađa od Metkovića do Ploča.
                                </p>
                            </div>
                            <div className='slika'>
                                <Link to='/maraton'><img src={Maraton}></img></Link>
                            </div>
                        </div>
                        <div className='opuzen'>
                            <div className='slika'>
                                <img src={Opuzen}></img>
                            </div>
                            <div className='tekst'>
                                <p>
                                    Neretvom se nizvodno stiže do Opuzena. Ovo mjesto danas se diči obnovljenim središtem – Trgom kralja Tomislava u obliku rimskog foruma. Povijest Opuzena seže u doba Dubrovačke republike, a vjeruje se da mu ime dolazi od mletačke utvrde Fort Opus. Kod Opuzena se od glavnog toka Neretve odvaja čak 12 rukavaca, a najveći je Mala Neretva. Ona pomalo zavija kroz nasade mandarina da bi se ulila u more kod Blaca.
                                </p>
                                <p>
                                    Nizvodno od Opuzena dolina se po treći put širi. Za razliku od Metkovića, gdje se močvara nastavlja na poljoprivredne površine, ovdje trsku i šaš gotovo u potpunosti istiskuju nasadi mandarina i ostalih kultura. Intenzivna poljoprivreda posljednjih desetljeća je stubokom transformirala dolinu Neretve oko Opuzena. Mediteranska topla klima s blagim zimama i plodnim aluvijalnim tlom temelj je razvoja, no iako je usred močvare, u ljetnom vegetacijskom razdoblju nedostaju padaline.
                                </p>
                            </div>

                        </div>
                        <div className='navodnjavanje'>
                            <p>
                                Stoga se krenulo u navodnjavanje pa je danas na Neretvi teško razlikovati prirodne vodotokove od mreže umjetnih kanala za navodnjavanje. Dugo vremena se močvari uzimalo plodno tlo doline „jendečenjem“, odnosno probijanjem kratkih ali širokih kanala, „jendeka“. Ručno se motikama i posebnim lopatama, „badiljima“, na obje strane buduće parcele kopalo tlo i izbacivao na parcelu dok ova ne bi porasla izvan dosega vode. „Jendečiti“ bos u vodi i samo snagom svojih ruku nije mogao bilo tko pa je to bio tražen i dobro plaćen posao. U posljednjih pedesetak godina močvara kod Opuzena se isušila, na mjestu trske su posađeni agrumi pa se polja intenzivno navodnjavaju suvremenim metodama i strojevima. Glavni izvor vode za navodnjavanja je Neretva kod Doljana, gdje u rijeci prestaje utjecaj mora.
                            </p>
                        </div>


                    </div>
                    <div className="slaneMocvare">
                        <h2>Slane močvare</h2>
                        <div className='parila'>
                            <div className='tekst'>
                                <p>
                                    Više uz rubove doline i uz izvore nalazimo jezera ili veće močvare. Udaljeni i očuvani, to su ornitološki rezervati Podgrede, Prud i Orepak. Tu su i zaštićena područja Modro Oko i jezero Desne. Jezero Kuti i Parila predložena su kao ornitološki i ihtiološki rezervati. Upravo je i boćata voda lagune Parila i Vlaške na sjevernoj strani vrlo pogodan prostor za mrijest ribe te za ishranu i razvoj riblje mlađi.
                                </p>
                                <p>
                                    Parila su takoreći već na moru, na samom kraju Neretvina puta. Delta ne prestaje ni na zadnjem traku čvrsto kanalizirane obale, već se proširuje i u more. Iako se čini da za vrijeme plime more suvereno vlada sve do Pelješca, oseka otkriva prostrane pješčane sprudove. Taj sedimentni jezik Neretva je nanijela u more gurajući ga pred naslagama novog sedimenta. Tu se miješa morska i slatka voda pa nastaju posebni uvjeti. Ovo plitko, muljevito stanište kao stvoreno je za hranjenje ptica močvarica i onih koje vole blato. Podzviždači, žalari, oštrigari te čaplje gacaju u plitkoj vodi za vodenim beskralježnjacima i ribama. Uz obalu u pličini rastu halofiti – biljne zajednice caklenjača, biljaka koje podnose sol.
                                </p>
                            </div>
                            <div className='slika'>
                                <img src={Parila}></img>
                            </div>

                        </div>
                        <div className='ptice'>


                            <p>
                                To je i stanište za vlastelice, morskog kulika i kulika sljepčića… Posebno su ti sprudovi zahvalni za vrijeme migracije kada su otvorena trpeza umornim pticama na putu sa sjevera na jug. Gotovo nestvarno djeluju stotine tih ptica u pozadini mora i krševitog Pelješca. Blaga mediteranska zima također je doba značajnog okupljanja ptica dok na kontinentu vlada surova zima. O značaju samog ušća za ptice, ali i o potrebi očuvanja Neretve, svjedoči zakonska zaštita delte kao ornitološkog i ihtiološkog rezervata.
                            </p>
                            <p>
                                Neretva više nije kao što je nekad bila – ona je svakako na prekretnici. Nema više slike koju je gledao ornitolog i veliki entuzijast Dragutin Rucner – velika jata ptica močvarica koja predvečer prelijeću Šibanicu i spuštaju se u deltu na noćenje. Niti su jata više velika, niti je delta neoskvrnjena. Niti se Neretljani probijaju kroz močvaru trupama i lađama u svadbenim i pogrebnim povorkama. Dolina Neretve ima sve prilike da razvija održivu poljoprivredu, ekološki i klasični turizam mora i sunca, a da pri tome zadrži narušeno, ali još uvijek ogromno prirodno bogatstvo.
                            </p>


                        </div>
                        <div className='iframe-container'>
                            <iframe width="1200" height="600" src="https://www.youtube.com/embed/B6_DkU9EzUc?si=X5A54acb-220S3Yx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Naslovna;