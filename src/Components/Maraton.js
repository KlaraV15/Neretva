


import Grb from '../Slike/grb.png';
import Stit from '../Slike/stit_maratona_ladja.jpg';
import Lada from '../Slike/lada.jpg';
import Ruta from '../Slike/ruta.jpg';
import Brzinske from '../Slike/brzinske.jpg';
import { Link } from 'react-router-dom';
import Prijava from './Prijava';
import Pobjednici from './Pobjednici';
function Maraton(params) {
    let pob = {
        dvadesetSesti: "UL Zagreb i UL Općine Slivno",
        dvadesetPeti: "UL Zagreb",
        dvadesetCetvrti: "UL Stablina",
        dvadesetTreci: "UL Zagreb",
        dvadesetDrugi: "Gusari Komin",
        dvadesetPrvi: "UL Stablina",
        dvadeseti:"Gusari Komin",
        devetnesti:"SU Argo Bjelovar",
        osamnesti:"UL Stablina",
        sedamnesti:"UL Crni put",
        sesnesti:"Gusari Komin",
        petnesti:"Gusari Komin",
        cetrnesti:"Gusari Komin",
        trinesti:"Gusari Komin",
        dvanesti:"Gusari Komin",
        jedanesti:"UL Staševica",
        deseti:"UL Rogotin",
        deveti:"UL Rogotin",
        osmi:"UL Rogotin",
        sedmi:"UL Donjani donji(Slivno)",
        sesti:"UL Komin",
        peti:"UL Donjani donji(Slivno)",
        cetvrti:"UL Komin",
        treci:"UL Komin",
        drugi:"UL Rogotin",
        prvi:"UL Rogotin",
      };
    return (
        <div className="maraton">
            <div className='background'>
                <div className='content'>
                    <div className='header'>
                        <div className='slika'>
                            <img src={Grb}></img>
                        </div>
                        <div className='tekst'>
                            <h1>Maraton lađa</h1>

                            <p>
                                Maraton lađa je amatersko sportsko natjecanje u utrci lađama, tradicionalnim autohtonim plovilima u dolini <Link to='/'>rijeke Neretve</Link>.
                            </p>
                            <p>
                                Održava se jednom godišnje, druge subote u kolovozu, na ruti dugoj 22.500 metara. Preko 400 veslača sudjeluje na utrci koja se vesla rijekom Neretvom i njenim rukavcima na potezu od <Link to='/metkovic'>Metkovića</Link>  do Ploča.
                            </p>
                            <p>
                                Maraton lađa tijekom godina postao je najveći maritimni sportski događaj u ovom dijelu Europe te iz godine u godinu privlači sve veći broj veslača i gledatelja.
                            </p>
                        </div>

                    </div>
                    <div className="stit">
                        <div className='tekst'>
                            <h2>Domagojev štit</h2>
                            <p>
                                Veliki prijelazni brončani štit kneza Domagoja težak 37 kilograma, autora Nikole Vučkovića-Nidže.
                            </p>
                            <p>
                                Štit se uručuje pobjedniku Maratona lađa.Za tri uzastopce osvojena prva mjesta na maratonu lađa, štit se dodjeljuje u trajno vlasništvo.
                            </p>
                        </div>
                        <div className='slika'>
                            <img src={Stit}></img>
                        </div>
                    </div>
                    <div className="gledanost">
                        <h2>Gledanost</h2>

                        <p>
                            Maraton lađa jedan je od najvećih događaja u Hrvatskoj, a ujedno i turistički spektakl i atrakcija. Uživo ga gleda preko pedeset tisuća gledatelja na cijeloj ruti. Svakako najdojmljiviji i najatraktivniji trenutak je start u Metkoviću. Tada oko 400 veslača u 33 (iste) lađe, gusto zbijenih, i tutnjavu bubnjeva nezadrživo kreće prema dalekom cilju u Pločama. Iako je cilj daleko i ruta naporna, na startu sve ekipe zaveslaju kao da je cilj 100 metara dalje te u istom ritmu voze cijelom rutom.
                        </p>

                    </div>
                    <div className="pravila">
                        <h2>Pravila</h2>
                        <div className='ruta'>
                            <div className='slika'>
                                <img src={Ruta}></img>
                            </div>
                            <div className='tekst'>
                                <p>
                                    Start maratona lađa je kod mosta u Metkoviću, zatim se vozi nizvodno rijekom Neretvom pored Opuzena do Ploča. Posadu lađe čine: 10 veslača, bubnjar i parićar (kormilar). Tijekom natjecanja, dozvoljena je zamjena (do) 6 novih veslača u Opuzenu, tako da ekipa broji minimalno 12 a maksimalno 18 natjecatelja.
                                </p>
                            </div>
                        </div>
                        <div className='lada'>
                            <div className='tekst'>
                                <p>
                                    Lađa mora biti tradicionalnog oblika i prema dimenzijama propisanih pravilnikom sa točno utvrđenim brojem i dimenzijama lukoća (rebara). Trup lađe mora biti od drveta, sa točno određenom debljinom daske.Vesla su tradicionalnog oblika, od drveta kao i parić (kormilo) koje je oblika dužeg vesla.
                                    Kako bi se osigurali isti uvjeti za sve natjecatelje prionulo se izgradnji novih istih lađa što je završeno 2007.godine i na tom 10.jubilarnom maratonu nastupile su po prvi put 33 identične lađe. Najviše je na maratonu sudjelovalo 41 ekipa, 2013.godine. Optimalan broj lađa za sudjelovanje je 33 koliko ima identičnih lađa u vlasništvu Udruge lađara. Za sudjelovanje na maratonu Udruga lađara osigurava lađu (dok vesla, parić i sjedalice ekipe same osiguravaju) svakoj ekipi. ULN ustupa lađu za treniranje uoči maratona lađa prijavljenim ekipama.
                                </p>
                            </div>
                            <div className='slika'>
                                <img src={Lada}></img>
                            </div>
                        </div>
                        <p>
                            Veslači sjede raspoređeni na rubu obje strane lađe, s tim da im noga ne smije prelaziti preko lađe (može biti ispružena po rubu ili u lađi). Zamjene se vrše na za to predviđenom mjestu na desnoj obali Neretve u pravcu rive u Opuzenu. Bubnjar, se nalazi na provi ili sredini lađe i može zamijeniti bilo kojeg veslača po potrebi tijekom utrke. Tijekom utrke dozvoljena je međusobna zamjena u lađi ali maksimalno 10 vesala mora biti u vodi.
                        </p>
                        <div className='brzinske'>
                            <div className='slika'>
                                <img src={Brzinske}></img>
                            </div>
                            <div className='tekst'>

                                <p>
                                    33 iste lađe dodjeljuju se ekipama poredanim od 1. do 33. mjesta na brzinskim utrkama u Opuzenu nekoliko dana ranije dok preostale ekipe (ukoliko ima više prijavljenih) voze izvan konkurencije u približno istim lađama. Radi boljeg razumjevanja, možete pogledati skicu izgleda lađe sa nazivima glavnih dijelova.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="zanimljivosti">
                        <h2>Zanimljivosti</h2>
                        <div className='tekst'>
                            <p>
                                Pobjednička ekipa dobiva zlatne medalje, veliki prijelazni pobjednički brončani štit kneza Domagoja i manji štit u trajno vlasništvo te novčanu nagradu. Drugoplasirana i trećeplasirana ekipa dobivaju srebrene i brončane medalje te manje štitove u trajno vlasništvo kao i novčane nagrade. O nagradnom fondu za ostale ekipe odluku donosi organizator.
                            </p>
                            <p>
                                Iako je prvotna ideja bila da na Maratonu lađa mogu sudjelovati samo oni koji su rođeni u dolini Neretve te potomci naših iseljenika iz ovih krajeva, radi popularizacije ovog velikog natjecanja, naknadno je dozvoljen nastup i ekipama iz drugih mjesta i država. Do sada su nastupale posade Hrvata iz inozemstva: potomci naših iseljenika iz Australije (2000. i 2001.g., ekipa hrvatske manjine u Italiji iz pokrajine Mollisse (čiji su preci iz Neretve) (od 2002.godine), ekipa Salašari Somborski iz Srbije te više ekipa iz susjedne BiH.
                            </p>
                            <p>
                                Reportaža sa Maratona lađa 2001.godine bila je prikazana na EUROSPORTU 2003. godine. 2006.godine. HTV je snimila dokumentarni film “Rivalstvo što nas veže-Maraton lađa na Neretvi” koji je na TV prikazan 2007.godine a u prodaji je bio i DVD sa istoimenim filmom. Od 2020. godine Udruga je osigurala prijenos Maratona lađa uživo na Hrvatskoj radiotelevziji te se svake godine druge subote u kolovozu diljem Hrvatske i svijeta može uživati u borbi za štit kneza Domagoja i ljepotama doline Neretve.
                            </p>
                        </div>
                        <div className='slika'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/vK1f8Y1b5do?si=HGLZmjyFfFcSoOmX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className='tablica'>
                       <Pobjednici pro={pob}></Pobjednici>
                    </div>
                    <Prijava></Prijava>
                </div>
            </div>
        </div>
    )
}
export default Maraton;