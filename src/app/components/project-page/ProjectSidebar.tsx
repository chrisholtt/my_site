"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function ProjectsSidebar({ projects }: any) {
    const currentRoute = usePathname();
    return (
        <List component="nav" aria-label="main mailbox folders"
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 'auto',
                '& ul': { padding: 0 },
            }}
            subheader={"projects"}
        >
            <ListItemText primary="Projects" />
            <Divider />
            {
                !!projects && projects.map((proj: any, i: number) => (
                    <Link href={{
                        pathname: '/project/' + proj.id,
                    }}
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