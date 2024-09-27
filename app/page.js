import styles from "@/app/page.module.css"
import Project from "@/components/Project"

export default function Home() {
  return (
    <div className={styles.page}>
      <Project
        title="Project Title"
        date="March 12, 2024"
        description="Project description"
      />
      <Project
        title="Project Title"
        date="March 12, 2024"
        description="Project description"
      />
      <Project
        title="Project Title"
        date="March 12, 2024"
        description="Project description"
      />
    </div>
  )
}
