"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function ProjectsSidebar({ projects }: any) {
    const currentRoute = usePathname();
    return (
        <List component="nav" aria-label="main mailbox folders" className="dark:bg-black"
            sx={{
                width: '100%',
                maxWidth: 360,
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                padding: 0,
                '& ul': { padding: 0 },
            }}
        >

            {
                !!projects && projects.map((proj: any, i: number) => (
                    <Link href={{
                        pathname: '/project/' + proj.id,
                    }}
                        key={i}
                    >
                        <ListItemButton
                            selected={currentRoute == "/project/" + proj.id}
                        >
                            <ListItemText primary={proj.title} />
                        </ListItemButton>
                    </Link>
                ))
            }
        </List>
    );
}