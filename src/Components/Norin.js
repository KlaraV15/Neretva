import Legenda from '../Slike/legend.jpg.png';
import Kula from '../Slike/kula.jpg';
import Trupa from '../Slike/Trupica.jpg';
import Lada from '../Slike/Ladje_s_teretom.jpg';
import Model from '../Slike/modelTrupe.jpg';
import Narona from '../Slike/narona.jpg';
import { Link } from 'react-router-dom';
function Norin() {


    return (
        <div className="norin">
            <div className='divv'>
                <div className="opcenito">
                    <h1>Rijeka Norin</h1>

                    <p>
                        Rijeka Norin, lokalno zvana i Norilj, cijelom svojom dužinom teče širim područjem <Link to='/metkovic'>grada Metkovića</Link>, te predstavlja dio njegove administrativne granice s općinom Kula Norinska na zapadu. Izvire u malom izvorskom jezeru u metkovskom prigradskom naselju Prud na prijelazu krša u močvarno područje delte Neretve, a u <Link  to='/'>rijeku Neretvu</Link> se ulijeva nedaleko naselja Kula Norinska. Rijeka je toliko obilata vodom da je cijelim svojim tokom čitavu godinu plovna barkama od dvije do tri tone, a iz izvora Norina vodom se opskrbljuje i suvremeni regionalni vodovod "Neretva-Pelješac-Korčula-Lastovo-Mljet".
                    </p>
                    <iframe width="800" height="500" src="https://www.youtube.com/embed/LN6Ih4Dojf8?si=GZiBxvVmGEavaWXt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="zanimljivosti">
                    <h1>Zanimljivosti</h1>
                    <div className='narona'>
                    <div className='tekst'>
                        <p>
                            Ime Norin je ilirskog podrijetla. On je protjecao kroz antičku Naronu po kojemu je taj grad i dobio ime. Iako je rimska Narona nestala, ime Norin sačuvalo se do danas. Najstariji pisani dokument u kojem se spominje Norin potječe iz 1397. godine: "alo poreco de Norin".
                        </p>
                        <p>
                            Smatra se da je u antičko doba tijek Norina morao biti drugačiji. To je uočljivo u njegovu koritu u kojem leže krupni ostaci zidina Narone, koji se jasno vide prilikom vožnje pojedinim njegovim dijelovima. Norin se vjerojatno nekoć ulijevao u Neretvu već poviše Narone, bliže današnjem Metkoviću, i tek je kasnije zauzeo sadašnje korito, jedno napušteno krilo Neretve.
                        </p>
                    </div>
                    <div className='slika'>
                        <a href='https://www.a-m-narona.hr/'><img src={Narona} id='narona'></img></a>
                    </div>
                    </div>
                    <div className='kula'>
                        <div className='tekst'>
                            <p>
                                Prema rijeci Norin ime nosi utvrda Kula Norinska, a prema utvrdi naselje i <a href='https://kulanorinska.hr/'> općina Kula Norinska. </a>
                            </p>
                        </div>
                        <div className='slika'>
                            <img src={Kula}></img>
                        </div>
                    </div>
                    <div className='trupa'>
                        <p>
                            U rijeci Norin poznat je lov na žabe i jegulje, posebice je bogat jesenski lov kad jegulja putuje u more. Norinom su oduvijek plovili stari pučki čamci: trupice i lađe. Svaka obitelj nastanjena uz Norin imala je trupicu, a gdje se zemlja više obrađivala ili čuvala stoka, i lađu.
                        </p>
                        <div className='slike'>
                            <img src={Lada}></img>
                            <img src={Model}></img>
                            <img src={Trupa}></img>
                        </div>
                    </div>
                    <p>
                        Norin je danas početna točka brojnih izletničkih programa i foto-safarija kojima se posebno naglašava ljepota i vrijednost Norina je u čistoći njegove vode i raskoši prirodnih bioraznolikosti koje treba očuvati, zaštititi izvornu prirodu i iskonsku ljepotu, uz obilazak arheoloških lokaliteta i kulturno povijesnih znamenitosti.
                    </p>
                </div>
                <div className="legenda">
                    
                    <div className="tekst">
                    <h1>Legenda</h1>
                        <p>
                            "Davno, davno živio je kralj od Norina. Bio je jako ružan : imao je glavu od gudina, noge od kenjca i kozje uši. Živio je u Kuli Norinskoj. Svaki dan su ga dolazili brijati, ali kralj Norin nije htio da se zna koliko je ružan, pa je ubijao brijače. Jednome brijaču majka je napravila kruh od svojeg mlijeka da ga da kralju. Kralj Norin ga nije htio ubiti jer su nakon pojedene pogače postali braća po majkinom mlijeku te ga je pustio uz uvjet da nikome ne kaže koliko je zapravo ružan. Brijač nije mogao čuvati tajnu samo za sebe te je iskopao rupu i zemlji se ispovijedio kako kralj izgleda. Iz te rupe narasla je biljka koja je pjevala : "U kralja Norina glava od gudina, noge od kenjca, kozje uši". Zato je kralj Norin skočio s kule. U Krvavcu se okrvavio, u Opuzenu se opuza, a u Vidu su ga vidili i onda se utopio. Narasla mu je brada od jegulja."
                        </p>
                    </div>
                    <div className="slika">
                        <a href='https://djecji-vrtic-opuzen.hr/wp-content/uploads/2020/05/prica-o-kralju-od-Norina1.pdf'><img src={Legenda}></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Norin;