export type Project = {
    id: number,
    title: string,
    year: string,
    category: Category,
    summary: string,
    description: string[],
    stack: string[],
    image?: string,
    github?: string,
    demo?: string
}

export type Category = "ALL" | "AI" | "Web" | "Mobile"

export const CATEGORIES: Category[] = ["ALL", "AI", "Web", "Mobile"]

export const projects: Project[] = [
    {id: 0, title: "Lines of Actions", year: "2025", category: "AI", summary: "An AI opponent for the Lines of Action board game, built with Minimax, alpha-beta pruning and custom heuristics.", description: ["Developed an AI opponent for the Lines of Action board game using the Minimax algorithm to evaluate the best move.", "Designed heuristic evaluation functions to score board states, compare strategic positions and improve move selection.", "Implemented alpha-beta pruning to reduce the search space and improve decision-making performance.", "Implemented depth-limited search to balance decision quality and execution time during move evaluation."], stack: ["AI", "Java", "Min/max", "Optimization"]},
    {id: 1, title: "AthlETS", year: "2026", category: "Web", summary: "A full-stack sports management platform for athletes, coaches and staff of ÉTS teams, with role and team access control.", description: ["Developed a full-stack sports management platform designed for athletes, coaches, and staff across ÉTS sports teams.", "Designed a React/Spring Boot architecture with PostgreSQL persistence, focused on maintainability and scalability.", "Implemented secure authentication and authorization with Spring Security, session auth and role/team access control."], stack: ["React", "Java", "Spring boot", "PostgreSQL", "Docker", "Modular architecture"]},
    {id: 2, title: "OGym", year: "In progress", category: "Mobile", summary: "A cross-platform gym tracker with offline support, shared Kotlin Multiplatform logic and a Spring Boot API.", description: ["Developed a cross-platform gym tracking application allowing users to log workouts and review training history over time.", "Designed the mobile application using MVVM architecture with shared logic in Kotlin Multiplatform for Android and iOS.", "Built a Spring Boot REST API to manage workout history, exercise data, and synchronization between clients.", "Implemented SQLDelight locally and PostgreSQL server-side to support offline access and reliable synchronization."], stack: ["Android", "Kotlin", "Kotlin Multiplatform", "Clean Architecture", "MVVM", "Spring boot", "Dependency Injection", "SQLDelight", "PostgreSQL"]}
]