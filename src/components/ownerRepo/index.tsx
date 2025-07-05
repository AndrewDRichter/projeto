"use client"
import "./styles.css";

import { useState } from "react";

import Image from "next/image";

interface OwnerRepoProps {
    avatar_url: string;
    name: string;
}

export function OwnerRepo({ avatar_url, name }: OwnerRepoProps) {
    const [show, setShow] = useState(false);



    return (
        <div>
            {show && (
                <>
                    <Image
                        src={avatar_url}
                        alt="github repository owner avatar image"
                        width={30}
                        height={30}
                    />
                    <strong>{name}</strong>
                </>
            )}

            <button
                onClick={() => { setShow(!show) }}
            >
                {show ? 'ocultar nome' : 'Exibir nome'}
            </button>
        </div>
    )
}