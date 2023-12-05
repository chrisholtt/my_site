"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function ProjectsSidebar({ projects }: any) {
    const currentRoute = usePathname();
    return (

        <List component="nav" className="hideScrollBar 2xl:max-w-[300px] xl:max-w-[300px] sm:max-w-full flex xl:flex-col sm:flex-row border-zinc-200 dark:border-stone-800 overflow-scroll rounded-lg shadow-md dark:bg-black bg-white"
            sx={{
                width: '100%',
                position: 'relative',
                overflow: 'auto',
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
                            <ListItemText
                                primary={proj.title}
                                sx={{
                                    whiteSpace: 'nowrap',
                                }}
                            />
                        </ListItemButton>
                    </Link>
                ))
            }
        </List >

    );
}