import Link from "next/link"

const Project = (props) => {
  const { title, description, date, imageUrl } = props
  return (
    <div className="card">
      <img src={imageUrl} />
      <div className="project-date">Posted on {date}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`/${title}`} className="btn">
        Read More
      </Link>
    </div>
  )
}

export default Project
