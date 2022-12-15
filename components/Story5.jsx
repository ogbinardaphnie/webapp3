<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
</link>

import styles from "./Story.module.css";

export default function Story() {
    return (
        <div className={styles.container}>
            <div class={styles.cards}>
            <div class={styles.card}>
                <img class={styles.card__image} src="5.png"/>
                <div class={styles.card__content}>
                    <p>       CHATTY GRWM: HOW TO DEAL </p>
                    <p>        WITH HATERS/TOXIC PEOPLE</p>
                    <p>                    By: Kryz Uy </p>
                </div>
        <div className={styles.message}>
         <div className={styles.word}>
          <p>
          Hey hey hey, ladies (and gents!) we’re back with a GRWM! Oh boy, it’s been a while! Today we’ll focus on glamin’ up while I give my two cents on how to deal with ballbusters.
          I got nothing but love, and I thank everything that has allowed me to see life in all shades of beautiful.
          Those of you who needs an eye-opener – well you may literally want to get an inspired “sight”.
          I’ve found amazing contact lenses and ever since coming across them, I’m a fan!
          Do you know that Avaira Vitality contact lenses doesn’t just help you see better – it also combats astigmatism!
          Who says beauty and healing are two different concepts?
          I’ve honestly been “seeing” a whole lot of change around me lately and I think it’s because I’m given an opportunity to have a fresher perspective.
          Yes, you cannot change the things beyond your control (like people’s bad opinion of you). But you can definitely change how you react to them.
          So focus all your energy in things that matters – like loving yourself more and becoming the best version of you. Right?
        </p>
            </div>
            <div className={styles.link}>
              <button>
                <a href="/HOW_TO_CHANGE_YOUR_LIFE">Next </a>
              </button>
              </div>
              <div className={styles.back_button}>
            <button><a href="/60_HOURS_NO_SLEEP_IN_SOKOR">Back</a></button>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
