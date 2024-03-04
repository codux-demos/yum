import { createBoard } from '@wixc3/react-board';
import styles from './typography.module.scss';

export default createBoard({
    name: '🗂️ Typography',
    Board: () => (
        <div className={styles.root}>
            <h1 className={styles.headingHuge}>
                People who love to eat are always the best people
            </h1>
            <h2 className={styles.headingExtraLarge}>
                Food, to me, is always about cooking and eating with those you love and care for
            </h2>
            <h3 className={styles.headingLarge}>
                Food brings people together on many different levels. It&apos;s nourishment of the
                soul and body; it&apos;s truly love.
            </h3>
            <h4 className={styles.headingMedium}>
                Food brings people together on many different levels. It&apos;s nourishment of the
                soul and body; it&apos;s truly love.
            </h4>
            <h5 className={styles.headingSmall}>
                A well-prepared meal is a love letter to the senses, an exquisite dance of colors,
                textures, and tastes that elevates the act of eating into a moment of pure joy
            </h5>
            <h6 className={styles.headingTiny}>
                Eating mindfully is a meditation, a moment of gratitude for the labor of farmers,
                the artistry of chefs, and the abundance of the Earth. It&apos;s a communion with
                nature on a plate.
            </h6>
            <p className={styles.paragraphHuge}>
                Cooking is about passion, so it may look slightly temperamental in a way that
                it&apos;s too assertive to the naked eye.
            </p>
            <p className={styles.paragraphExtraLarge}>
                Food, with its tantalizing aromas and diverse flavors, serves as our common ground—a
                universal experience that transcends borders and languages. James Beard, a culinary
                icon, understood the unifying power of a well-prepared meal to bring people together
                in harmony.
            </p>
            <p className={styles.paragraphLarge}>
                To dine well is not just a luxury; it is a necessity for a balanced life. Virginia
                Woolf eloquently expressed the intimate link between satiety and overall well-being,
                emphasizing that our ability to think, love, and sleep is profoundly influenced by
                the nourishment we provide our bodies.
            </p>
            <p className={styles.paragraphBase}>
                Good food is the cornerstone of genuine happiness; it is the foundation upon which
                memories are built and shared. Auguste Escoffier, a culinary pioneer, recognized the
                transformative power of exceptional cuisine to elevate our spirits and create
                lasting moments of joy.
            </p>
            <p className={styles.paragraphSmall}>
                In the midst of our fast-paced lives, the act of sitting down to a well-prepared
                meal is a declaration of self-worth. It&apos;s a moment to appreciate the artistry
                of a well-crafted dish, to indulge in the pleasure of taste, and to honor the
                age-old rituals that turn eating into a nourishing and soulful experience.{' '}
            </p>
            <p className={styles.paragraphTiny}>
                A thoughtfully prepared meal is a form of self-love. It&apos;s a pause in our hectic
                schedules, a deliberate choice to nurture both body and spirit. Food is not just
                sustenance; it&apos;s a symphony of flavors, a reminder that, amidst the chaos, we
                deserve to savor the richness of life encapsulated in every delicious bite.
            </p>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        windowBackgroundColor: '#eeeeee',
        windowWidth: 1400,
        windowHeight: 900,
    },
});
