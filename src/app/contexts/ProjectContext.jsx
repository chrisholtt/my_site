// ProjectContext.js
import { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export function useProjectContext() {
    return useContext(ProjectContext);
}

export function ProjectProvider({ children }) {
    const [projectData, setProjectData] = useState(null);

    return (
        <ProjectContext.Provider value={{ projectData, setProjectData }}>
            {children}
        </ProjectContext.Provider>
    );
}
