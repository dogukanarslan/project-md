import React from "react"
import fs from "fs"
import matter from "gray-matter"
import { marked } from "marked"

const getProject = (slug) => {
  const project = fs.readFileSync("projects/" + slug + ".md", "utf-8")
  const { data: frontmatter, content } = matter(project)

  return { content, frontmatter }
}

const ProjectDetail = (props) => {
  const project = getProject(props.params.title)

  return (
    <div className="card">
      <h1 className="card__title">{project.frontmatter.title}</h1>

      <div className="card__date">{project.frontmatter.posted_at}</div>

      <img src={project.frontmatter.cover_image} />

      <div dangerouslySetInnerHTML={{ __html: marked(project.content) }} />
    </div>
  )
}

export default ProjectDetail
