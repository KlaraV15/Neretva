
import Grb from '../Slike/grbMtk.png';
import Predolac from '../Slike/predolac.jpg';
import Delta from '../Slike/delta.jpg';
import Narona from '../Slike/muzej.jpg';
import Maraton from '../Slike/maraton.jpg';
import Mehanika from '../Slike/mehanika.jpg';
import Strijelci from '../Slike/domagojeviStrijelci.jpg';
import Vid from '../Slike/vidCrkva.jpg';
import Kula from '../Slike/norinska.jpg';
import Kino from '../Slike/kino.jpg';
import { Link } from 'react-router-dom';

function Metkovic() {
    return (
        <div className="metkovic">
            <h1>Metković</h1>
            <div className="opcenito">
                <div className='grb'>
                    <div className='tekst'>
                        <p>
                            Smješten na samoj granici dvaju nekadašnjih svjetova, Venecije i Osmanlijskog imperija, Metković je ipak sačuvao svoj dalmatinski duh i pripadnost hrvatskom nacionalnom biću. To je naročito dokazao u posljednjem ratu kada su na Vrata od Metkovića mnogi navaljivali, jer je od njih do Ploča i mora manje nego iz Zaprešića u Sesvete. 116. brigada HV, kroz koju je prošla većina Metkovaca, znala je što joj je činiti.
                        </p>
                    </div>
                    <div className='slika'>
                        <img src={Grb}></img>
                    </div>
                </div>

                <div className='predolac'>
                    <div className='slika'>
                        <img src={Predolac}></img>
                    </div>
                    <div className='tekst'>
                        <p>
                            Prvi doseljenici koji su osnovali Metković nisu imali puno izbora. Brdo Predolac sa svojim južnim padinama davalo im je dobar zaklon od bure i cjelodnevnu izloženost suncu. Godina 1422., za sada, smatra se prvom pisanom potvrdom postojanja naselja. Predolac i danas čuva svoje stare kuće, čiji vlasnici imaju privilegiju prekrasnog pogleda na grad i dolinu pa sve tamo do Pelješca.
                        </p>
                    </div>
                </div>
                <div className='delta'>
                    <div className='tekst'>
                        <p>
                            Ono što još nije dovoljno iskorišteno jest upravo <Link to='/'>rijeka Neretva</Link> i njezini pritoci, rukavci, jezera. Cijela delta Neretve je prirodni fenomen. Delta prekriva površinu od 12.000 hektara. Od Metkovića do ušća sa sjevera i sjeveroistoka omeđena je ograncima dinarskih planina, a s juga podgradinsko-slivanjskim brdima. Najvažniji gradovi su Ploče, Opuzen i Metković.

                            Izvorno se sastojala od 12 rukavaca, ali je nakon brojnih i opsežnih melioracija i kultivacije tog poljoprivredno bogatog prostora, broj rukavaca sveden na samo četiri, a dotadašnja močvarna delta velikim dijelom je pretvorena u bogato poljoprivredno područje, kolokvijalno prozvano "Hrvatska Kalifornija".
                        </p>
                    </div>
                    <div className='slika'>
                        <img src={Delta}></img>
                    </div>

                </div>
                <div className='narona'>
                    <div className='slika'>
                        <img src={Narona}></img>
                    </div>
                    <div className='tekst'>
                        <p>
                            Današnji grad sa preko 17.000 stanovnika predstavlja središnje naselje doline Neretve sa jakim kulturnim i sportskim životom. Na žalost, upravo ono na čemu je grad temeljio svoj razvoj, a to je gospodarstvo, danas još uvijek nije na zadovoljavajućoj razini. Sadašnji nedostatak Metkovića kao pograničnog grada vjerojatno će u budućnosti ponovno biti njegova prednost.
                            Osim što je geografski u srcu doline Neretve pa je tradicionalno okrenut poljoprivredi, u zadnje vrijeme otkrivaju se i turistički potencijali Metkovića. U prigradskom naselju Vid je izgrađen prvi muzej– <a href='https://www.a-m-narona.hr/'> „Narona“ </a>, antičkog grada koji je svoje svijetle trenutke proživljavao u prvim stoljećima prošlog milenija, da bi potonuo u močvaru nakon provala Avara i Slavena početkom velike seobe.

                        </p>
                    </div>
                </div>
                <div className='zbirka'>
                    <p>
                        U gradu je nadaleko poznata Ornitološka zbirka, jedna od najvećih u Europi. Prirodoslovni muzej Metković u potpuno obnovljenim prostorima otvoren je 17. srpnja 2015. godine, ali njegova povijest seže u 1948. godinu, kada je utemeljena Ornitološka zbirka Metković.
                    </p>
                </div>
            </div>
            <div className="maraton">
                <div className='naslov'>
                    <Link to='/maraton'><h2>Maraton lađa</h2></Link>
                </div>
                <div className='tekst'>
                    <p>
                        U kolovozu održava se tradicionalni Maraton lađa koji je prije mnogo godina pokrenula skupina entuzijasta i tako spasila neretvansku lađu. Što je za Sinj Alka – to je za Metković i dolinu Maraton. Start ispod mosta u Metkoviću treba doživjeti.
                    </p>
                </div>
                <div className='slika'>
                    <img src={Maraton}></img>
                </div>
            </div>
            <div className="sport">
                <div className='slika'>
                    <img src={Mehanika}></img>
                </div>
                <div className='tekst'>
                    <p>
                        Sportu u gradu ugled je najviše podigao rukomet, mada je nogomet respektabilno star sport – NK Neretva osnovana je još davne 1919. godine. No, tek uspjesi RK Metković natjerali su mnoge da otvore svoje zemljovide i vide “gdje ga dođe taj Metković”. Današnji Metković živi s rukometom, ali uz nogomet, ne smijemo zaboraviti ni boćare koji su uspješni u najvišem hrvatskom natjecanju, vrijedne veslače i druga sportska društva.
                    </p>
                </div>
                <div className='naslov'>
                    <h2>Sport</h2>
                </div>

            </div>
            <div className="kultura">
                <div className='naslov'>
                    <h2>Kultura</h2>
                </div>
                <div className='tekst'>
                    <p>
                        Ne možemo se pohvaliti stoljetnom kulturom kao naš Dubrovnik ili manji gradovi uz obalu i u unutrašnjosti. Ali možemo se pohvaliti sadašnjošću. Ustanova za kulturu i sport, Matica hrvatska, jedna od najiskorištenijih gradskih knjižnica, kino, Gradska glazba, Folklorno društvo, kazališni amateri... to je tek dio institucija kroz koje Metkovke i Metkovci utažuju svoju glad za kulturom. Metković ima pravo kazalište, i to na dvije scene s 480 sjedećih mjesta u zatvorenom prostoru i 800 sjedećih mjesta u prekrasnom otvorenom prostoru uz Neretvu.
                    </p>
                </div>
                <div className='slika'>
                    <img src= {Kino}></img>
                </div>
            </div>
            <div className='misecina'>
                <div className='slika'>
                    <iframe width="250" height="150" src="https://www.youtube.com/embed/sPdVbepRE2c?si=g0Iq6C7UJzvrA-g2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='tekst'>
                    <p>
                        Ustanova za kulturu i sport, kao krovna organizacija, trudi se privesti svojim sugrađanima sve ono što u Hrvatskoj vrijedi, od kazališnih izvedaba preko koncerata do izložaba renomiranih hrvatskih umjetnika u čemu značajnu ulogu igra Matica hrvatska u Metkoviću. Svake godine u svibnju na Neretvu mjesečina padne. Istoimena smotra folklora već tri desetljeća okuplja folklorna društva iz Dalmacije, ali i šireg dijela hrvatske obale s gostima iz Slavonije i susjednih država gdje Hrvati žive.
                    </p>
                </div>
            </div>
            <div className="spomenici">
                <div className='prvo'>
                    <div className='naslov'>
                        <h2>Spomenici</h2>
                    </div>

                    <div className='tekst'>
                        <p>
                            Burna i bogata prošlost neretvanske doline ostavila je iza sebe brojne spomenike. Najdragocjeniji spomenik iz predantičkog perioda, uz brojne grobne gomile i gradine, je nalaz ukrasne figure jelena, vjerojatno iz željeznog doba, koji se danas čuva u muzeju u Oxfordu. Na prisustvo Grka podsjećaju dva fragmenta mramornog reljefa s prikazima plesačica iz II st. pr. Kr. Ostaci rimske vlasti u dolini su najbrojniji.
                        </p>
                    </div>
                </div>
                <div className='vid'>
                    <div className='tekst'>
                        <p>
                            Osim Narone sa svojim forumom i augusteumom, kao jedinstvenom cjelinom, tu su i razni pokretni i nepokretni spomenici: nalazi vila rustica, mozaici, skulpture. Bogata je i ranokršćanska sakralna baština. Do danas su iskopani ostaci čak pet ranokršćanskih bazilika u Naroni. Najinteresantnija je bazilika ispod današnje crkve Sv. Vida, uz koju se nalazi i ranokršćanski baptisterij – krstionica iz 5 st., s izvanredno očuvanim osmerokutnim krsnim zdencem.
                        </p>
                    </div>
                    <div className='slika'>
                        <img src={Vid}></img>
                    </div>
                </div>

                <div className='kula'>
                    <div className='slika'>
                        <img src={Kula}></img>
                    </div>
                    <div className='tekst'>
                        <p>
                            Iz turskih vremena ostala je utvrda Smrdan-grad i monumentalna višekatna Kula Norinska. Izgrađena na ušću <Link to='/norin'>rječice Norin</Link> u Neretvu početkom 16. st., kula je služila kao branič protiv upada venecijanskih brodova u dolinu. U vojne svrhe korištena je do 19. st. kad je pretvorena u vjetrenjaču. Nažalost, zarastao u bršljan, danas ovaj vrijedni spomenik propada.
                        </p>
                        <p>
                            Zbog čestih ratova i blizine granice nije preostao ni jedan značajniji građevni spomenik iz doba Venecije. Krajem 19. st. grade se župne crkve u Metkoviću i Opuzenu. Crkva Sv. Ilije u Metkoviću 1874. u neoromaničkom stilu, a crkva Sv. Stjepana u Opuzenu 1883. Zanimljivo je da je crkvene mramorne oltare obiju crkava radila majstorska radionica Bilinić iz Splita u kojoj je naukovanje započeo i čuveni kipar Ivan Meštrović. Jedan rani Meštrovićev rad, nadgrobni spomenik, križ s vijencem, nalazi se na metkovskom groblju Sv. Ivana.
                        </p>
                    </div>
                </div>

                <div className='strijelci'>
                    <div className='tekst'>
                        <p>
                            Kao spomen na slavnu pomorsku prošlost Neretvana u selu Vid podignuta je spomenik “Domagojevi strijelci” rad akademskog kipara Stjepana Skoke. Neretva je svojom ljepotom oduvijek privlačila i bivala inspiracijom za djela mnogih hrvatskih umjetnika poput Becića, Motike i drugih.
                        </p>
                    </div>
                    <div className='slika'>
                        <img src={Strijelci}></img>
                    </div>
                </div>

            </div>
            <div className='iframe-container'>
                <iframe className="background-video" width="1200" height="600" src="https://www.youtube.com/embed/tCMN2bEvD3U?si=8NqDtGmaFxUd4LMw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )




}

export default Metkovic;