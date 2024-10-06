import Link from "next/link"

const Project = (props) => {
  const {
    project: {
      slug,
      frontmatter: { posted_at, title, description, cover_image }
    }
  } = props

  return (
    <div className="card">
      <img src={`/project-md/${cover_image}`} alt="" />
      <div className="card__subtitle">Posted on {posted_at}</div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{description}</p>
      <Link href={`/${slug}`} className="btn">
        Read More
      </Link>
    </div>
  )
}

export default Project
