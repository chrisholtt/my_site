"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function ProjectsSidebar({ projects }: any) {
    const currentRoute = usePathname();
    return (
        // <div className='xl:w-[300px] sm:w-full xl:h-full sm:h-min border border-zinc-200 dark:border-stone-800 overflow-hidden rounded-lg shadow-md dark:bg-black bg-white' style={{ direction: '' }}>

        <List component="nav" className="max-w-[300px] sm:max-w-full dark:bg-black flex xl:flex-col sm:flex-row"
            sx={{
                width: '100%',
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

        // </div>

    );
}