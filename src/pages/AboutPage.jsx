
import css from'../styles/button.module.css'
console.log('css ===', css);

export default function AboutPage() {
  return (
    <div>
      <h2 className={css['d-none']}>About Page</h2>
      <p>About page text description</p>
      <button className={css.btn}>Read More</button>
    </div>
  )
}
