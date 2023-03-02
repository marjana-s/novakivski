import React, { useRef, useEffect, useState } from "react";
import './MapRoad.css'
import { AddAnim } from "../../animation/animationOnScroll";
import Mother from '../../img/Mother.png'
import Father from '../../img/Father.png'
import Pumpkins from '../../img/Pumpkins.png'
import Sticks from  '../../img/Sticks.png'
import Yan from '../../img/Yan.png'
import Leon from '../../img/Leon.png'
import Fair from '../../img/Fair.png'
import Maria from '../../img/Maria.png'
import Muse from '../../img/Muse.png'
function MapRoad() {

  const [ view, setView] = useState(true)
  const [number, setNumber] = useState(1872);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
      if (window.scrollY > 800 && window.scrollY <= 5300) {
        setScrolled(true);
      } else if( window.scrollY > 6400 &&  window.scrollY <= 9400){
        setScrolled(true);
      }else if( window.scrollY > 10500){
        setScrolled(true);
      }
      else  {
        setScrolled(false);
      }
    };
  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(()=>{
    AddAnim()
  },[])

  return (
    <div>
        <div  className="first_period">
          <div className="center">
            <div className={ scrolled ? "my-class" : "line"}><span className='number' >{number}</span></div>
          </div>
          <div className="page">
            <div className="left_side">
              <p >Oleksa Novakivsky is strongly associated with Lviv. He lived in this city for 20 of his 63 years and is buried in Lychakiv Cemetery as a famous Lviv resident. However, he was born in eastern Podillia, in the village of Slobodo-Obodivka, Podillia province (now Vinnytsia region). There his father worked as a burglar for Count Feliks Sobanski. </p>
              <div className="mid_margin_top img">
                <img src={Mother} alt="" />
                <p className="caption">The artist's mother with her granddaughter,1890s</p>  
              </div>
              <p className="low_margin_top">After temporary unemployment (which forced Oleksa to drop out of school and go to work as a clerk), his father got a job as a forester in the village of Popeliukhy with the Brzozowski family. The family moved there. It was in the estates of the nobles that little Oleksa first got acquainted with art. Their houses were decorated with ancient engravings, paintings, and old prints. In these residences, "as if in opposition to the northern Russian school, Western European painting traditions were nurtured, which were coming there more and more vividly and at a faster pace," Volodymyr Sas-Zalozetsky described in his monograph.
              </p>
            </div>
            <div className="right_side">
              <div className="img">
                <img src={Father} alt="" />
                <p className="caption" >Portrait of his father, 1892.</p>
              </div>
              <p className="mid_margin_top">The family of Yevdokiya Dahdii Biletska and Kharlampii Novakivsky had six children: besides Oleksa, there were two brothers, Ivan and Andrii, and three sisters, Raisa, Teklia, and Mariia. From his mother and father, Oleksa learned from childhood to do every job with diligence and thoroughness, and even to keep repeating it for as long as he was satisfied.</p>
              <p className="low_margin_top">Oleksa's father wanted him, like his brothers, to follow Harlampia's profession. He said that in his opinion, the forest had never disappointed anyone. But Oleksa started to be interested in drawings at the age of 5. He used to redraw icons and paintings he came across. And at the age of eight, he started drawing what he saw in nature with pencil and charcoal.</p>
            </div>
          </div>

          <div className="page">
            <div className="left_side">
              <p className="low_margin_top">Oleksa Novakivsky's second school was nature itself. When he was 10 years old, he had a mystical incident on the way to the city. When he fell asleep during one of the stops, he had a dream. Ivan Holubovsky retells this story in his memoir, "A Spread of Mighty Wings". </p>
              <div>
                <p className="mid_margin_top">I bore my eyes into that face. I want to see the eyes of God! Eyes that I must paint, even if I have to die afterward. Dark stripes of eye features slowly begin to emerge from the magical shadows that play with the shimmering colors. As if they were closed in thought. I want to shout, I want to scream, to force them open, to open them. So that I could see them and remember those eyes that own the world and can shoot thunder. The eyes of God! </p>
                <p className="low_margin_top">But I can't find the strength to cry out. Despair, impotent anguish grips my childish heart. I exert all my strength, rush forward, fly headlong into something, and suddenly ... wake up from my dream." Then I realized that I was alone in the forest. But the fright was followed by the thought that I had just received my father's permission to study painting, so this opportunity cannot be lost. So he went through the woods and met his brothers, who laughed that Oleksa had cut a path through the forest.</p>
                <p className="low_margin_top">"When I reflected on this meeting with my brothers in later years, I could not help but make the subconscious observation that I would not have made it out of the jungle of that giant forest if it had not been for my belief that the permission of the painting education I had been fighting for since I was eight years old could not be unfulfilled."</p>
              </div>
            </div>
            <div className="right_side">
              <p className="mid_margin_top">"It was as if I was walking through an old forest among grasses and shady thickets on some important business. And as if an old bandura player approaches me. I had once seen him in an old blackened painting hanging in my teacher's apartment. The old man is blind with a strangely crooked smile and at the same time terrifyingly solemn. Tall as a giant, he bends down to work over me, takes my hand in his big, dry palm, and says in a voice that seems to have no sound." And the bandura player led little Oleksa through the alleys of giant roses to the giant tree. </p>
              <p className="low_margin_top">"Take a good look, just take a good look," the old man whispers. "At first I don't see anything. There is only a haze around. Then I slowly begin to recognize a shocked face. I stare at it and the cold grabs me again. I begin to recognize a seemingly powerful head and in it a face made of wheat grains. Between them, there is hair from different grains. And these grains seem to be whirling, moving like the gentle waves of a flowing river. </p>
              <p className="mid_margin_top">Oleksa Novakivsky relied on the purpose he had found since childhood and honed throughout his life: to manifest the nature of beauty in the everyday. That is why he went to the final work through dozens of working drawings and paintings. And only at the end of his life was he so satisfied with the style he had found that he said, "Now I am finally the master of my brush."</p>
            </div>
          </div>

          <div className="page">
            <div className="left_side">
              <p className="low_margin_top">Here is what Golubovsky writes about Oleksa's first training in A Spread of Mighty Wings. "He was a man of talent, but he had long been prim. He worked according to the patterns he had learned. Nevertheless, Oleksa Novakivsky learned a lot from him from a technical point of view. There he first began to master the technique of painting, and got acquainted with paints, their chemical composition, their proper use, and the peculiarities of drawing. The master already had three other students, older boys who had already worked for several years for the masters and were now painting on their own and taking a small fee for it. Oleksa was allowed by the master only occasionally and only for primitive tasks. Instead, Oleksa had to sweep the rooms, heat the stoves, do the housework, and go to town to buy things. For that, he got modest food. But in the evenings, when the master went to a restaurant, and in the mornings, when work in the workshop had not yet begun, Oleksa worked alone with charcoal and paint."</p>
              <div className="low_margin_top img">
                <img src={Sticks} alt="" />
                <p className="caption">Planing sticks</p>
              </div>
              <p className="low_margin_top">"Novakivsky did not like painting iconostases. He would rather go to the sea and paint landscapes with the colors that Klymenko scraped off his palette," Sas-Zalozetskyi recalled.When Oleksa realized that there was nothing more to learn from Klymenko, he left his studies and did not accept his teacher's offer to study to become a master.</p>
            </div>
            <div className="right_side">
              <div className="low_margin_top img">
                <img src={Pumpkins} alt="" />
                <p className="caption">Pumpkins. 1892 р. Oil on boardPrivate collection</p>
              </div>
              <p className="mid_margin_top">After two years of studying, Oleksa had to return home to Obodivka because the master received a serious order and disbanded the school. After his return, Oleksa created more than 20 paintings that were lost.When Oleksa was sixteen years old, a local forestry engineer, Henrik Pavlias, paid for him to study in Odesa. For four years, Novakivsky studied art in the studio of the artist Pylyp Klymenko and worked with him on an iconostasis in the village of Kubantsi. "He was also a bit formulaic in his compositions and thoughts, but he was much better than the first master in his painting technique. He also painted good portraits and successful landscapes, which earned him good money. He recognized Oleksa's considerable talent and initiative, agreed to pay him a salary and gave him some money to work on his own. Now Oleksa could buy himself various books, which he used to supplement his education on his own," Holubovsky wrote.</p>
            </div>
          </div>
        </div>

        <div className="title">
          <div className="main_title show_up element-animation"><h2>Krakow Academy of Fine Arts.</h2></div>
        </div>

        <div className="second_period">
          <div className="page">
            <div className="left_side">
              <div className="img">
                <img src={Leon} alt="" />
                <p className="caption">Leon Vychulkovsky</p>
              </div>
              <p className="mid_margin_top">Under Falat, the Krakow School of Drawing became an academy, one of the best art universities in Eastern Europe. Artists who fought against academic conservatism and defended creative positions, such as the aesthetics of Secession, Impressionism, and Symbolism, were invited there. During his studies at the academy and a four-year internship with Leon Vychulkovskyi, Novakivskyi created hundreds of impressionistic landscapes, conveying the impression of instant sensations and experiences through sketchy strokes and the effects of changing light. Novakivsky began to fill the landscapes with deep meaning and allegorical connotations.</p>
              <p className="low_margin_top">Novakivsky is the most successful graduate of the Krakow Academy of Fine Arts in terms of the number of medals and awards. From the second year of his studies, he was recognized by the Academy, but for unknown reasons, he lost his scholarship from the Brzezowski. His friend Holubowsky in The Spread of Mighty Wings suggests that it was because he signed his paintings in Ukrainian. At that time, he had to sell his paintings and drawings to make a living. He is considered a student of Jan Matejko. Stanisław Wyspianski and Jacek Malczewski, as well as Josef Meghofer, the luminaries of Polish symbolism, had a special influence on the formation of his figurative thinking. </p>
            </div>
              <div className="right_side">
                <p>An artist from Krakow who taught painting to the children of local nobility was impressed by Oleksa's talent. He persuaded the Brzozowski family to give him the scholarship to continue his studies at the Krakow Academy of Fine Arts.</p>
                <p className="low_margin_top">Upon entering the Academy, it turned out that he did not have a matura (basic education at the time), but his talent impressed the admission committee so much that the rectorate specially organized a separate general education exam to accept Oleksa as a student of the Academy.</p>
                <div className="img mid_margin_top">
                  <img src={Yan} alt="" />
                  <p className="caption">Yan Mateyko</p>
                </div>
                <p className="low_margin_top">He was one of the key figures in the transformation of contemporary art and the transition from realism to modernism. Between Impressionism and Post-Impressionism, Novakivsky developed his own style, which currently has no name. Its peculiarity is the pulsation of lines, which reflects the energy tension of the interwar period. This multilayered living contour is reminiscent of the works of Munch and Van Gogh.</p>
              </div>
          </div>

          <div className="page">
            <div className="left_side">
              <p className="mid_margin_top">In 1900, he completed his studies with a gold medal and a scholarship, and letters of recommendation to continue his studies abroad. But Novakivskyi did not take advantage of that scholarship, because he did not want to change his nationality, which was required for receiving the scholarship.</p>
              <p className="mid_margin_top">A new student center was established in Krakow, inheriting the traditions of the previous community and was called the Ukrainian Community in Krakow. The Krakow community members created a library, and organized numerous cultural and educational events, including lectures on current socio-political and Ukrainian studies topics, joint excursions, Ukrainian parties, and concerts. </p>
              <p className="mid_margin_top">In Krakow, Oleksa Novakivsky became friends with Bohdan Lepkyi, who was teaching Ukrainian language and literature at the Jagiellonian University. Lepkyi's apartment gathered the effective leaders of the Ukrainian community of the time and was the center of the Ukrainian community. Vasyl Stefanyk, Osyp Kurylas, Modest Sosenko, Ivan Trush, and Viacheslav Lypynsky came there. </p>
              <p className="low_margin_top margin_left ">Later, Novakivsky's home in Lviv would become a similar center of the Ukrainian cultural elite.</p>
            </div>
            <div className="right_side">
              <p className="high_margin_top">Members of the Ukrainian community in Krakow cooperated with the Prosvita Society, Ukrainian communities of Naddniprianshchyna, the Russian-Ukrainian Radical Party, and the Revolutionary Ukrainian Party. In 1930, the community numbered about 400 students.</p>
              <div className="img mid_margin_top">
                <img src={Fair} alt="" />
                <p className="caption">A fair in Ukraine. 1903</p>
              </div>
            </div>
          </div>

          <div className="title">
            <div className="main_title show_up element-animation"><h2>Novakivskyi's muse Creative life and new acquaintances</h2></div>
          </div>

          <div className="page">
            <div className="left_side">
              <div className="img">
                <img src={Maria} alt="" />
                <p className="caption">Anna Maria Novakivska. Photo from 1919.</p>
              </div>
              <p className="mid_margin_top"> "Initially, she stood in that marriage under the overwhelming influence of Oleksa's strongly pronounced individuality. His God became at once his God, his faith became her faith, his aspirations became his passion, his homeland became her homeland... But soon she moves on. This exceptional woman was his wing and friend, his guardian and his true support," Ivan Holubovsky writes in The Span of Mighty Wings.</p>
              <p> Her family was poor Hural (Polish Hutsuls). And in honor of his wife's origins, Oleksa Novakivsky asked her to wear Hural clothes, which added to her authenticity. Authenticity.</p>
              <p className="low_margin_top margin_left">"My dear and very dear Nusenko! It is a wonderful moonlit night. And I am with You in my thoughts and soul. My dear, how beautiful it is here! And I miss You to the point of complete happiness. How happy I will be if You stay here in Shlyakhtyntsi, for without You I will be very much covered... Come now, when the moonlit nights are so beautiful. I want to look into your blue eyes. Your blue eyes are my eternal joy." (letter from 1924).</p>
            </div>
            <div className="right_side">
              <p>Oleksa Novakivsky moved to the village of Mohyla in the suburbs of Krakow (like Bryukhovychi near Lviv or Bucha near Kyiv). There he rented a room from Rosalia Palmowska, a widow who lived in the house with her daughter Anna Maria.There he found his first admirer. A doctor from Krakow, Hohulski, visited a patient near that house when Oleksa was seriously ill. In addition to medical care and treatment, Novakivsky also received financial support from the couple Yosyp and Leontyna, who from then on bought his paintings and hosted him in their home. In their home, Oleksa met Bohdan Lepkyi and his future friend Ivan Holubovsky, who was Leontyna's brother.</p>
              <p className="low_margin_top margin_left">Rosalie Palmovska’s daughter was interested in Oleksa's work and spent hours watching him work. When Mrs. Palmovska died, the artist began to take care of the orphan. Gradually, their communication grew into tender love. "You are my only sunny love," Novakivskyi would say to Anna Maria. </p>
              <div className="img mid_margin_top">
                <img src={Muse} alt="" />
                <p className="caption">My muse. 1910. Oil on canvas</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:2000}}></div>
    </div>
  )
}

export default MapRoad