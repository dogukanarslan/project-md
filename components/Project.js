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
      <img src={cover_image} />
      <div className="project-date">Posted on {posted_at}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`/${slug}`} className="btn">
        Read More
      </Link>
    </div>
  )
}

export default Project
