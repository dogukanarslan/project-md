import styles from "@/app/page.module.css"
import Project from "@/components/Project"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const getProjects = () => {
  const files = fs.readdirSync(path.join("projects"))

  const projects = files.map((file) => {
    const slug = file.replace(".md", "")
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", file),
      "utf-8"
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return { slug, frontmatter }
  })

  return projects
}

export default function Home() {
  const projects = getProjects()

  return (
    <div className={styles.page}>
      {projects.map((project) => (
        <Project
          key={project.frontmatter.title}
          title={project.frontmatter.title}
          date={project.frontmatter.posted_at}
          description={project.frontmatter.description}
          imageUrl={project.frontmatter.cover_image}
        />
      ))}
    </div>
  )
}
