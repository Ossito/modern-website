import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
    <div>
      <h2 className={`${styles.heading2}`}>Want to talk about project ? </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>With th right credit card, you can improve your financial life by building credit, earning rewards and
          and saving money. But with hundreds of credits cards on the market
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
      <Button  /> 
    </div>
  </section>
)

export default CTA