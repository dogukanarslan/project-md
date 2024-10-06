import React from "react"
import fs from "fs"
import matter from "gray-matter"
import { marked } from "marked"

export const generateStaticParams = () => {
  const files = fs.readdirSync("projects")

  return files.map((title) => ({ title: title.replaceAll(".md", "") }))
}

const getProject = (slug) => {
  const project = fs.readFileSync("projects/" + slug + ".md", "utf-8")
  const { data: frontmatter, content } = matter(project)

  return { content, frontmatter }
}

const ProjectDetail = (props) => {
  const project = getProject(props.params.title)

  return (
    <div className="card">
      <h3 className="card__title">{project.frontmatter.title}</h3>

      <div className="card__subtitle">{project.frontmatter.posted_at}</div>

      <img src={`/project-md/${project.frontmatter.cover_image}`} alt="" />

      <div className="card__text" dangerouslySetInnerHTML={{ __html: marked(project.content) }} />
    </div>
  )
}

export default ProjectDetail
