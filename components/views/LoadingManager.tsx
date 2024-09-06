// components/LoadingManager.tsx
'use client';

import { useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';

export default function LoadingManager({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadFont = new FontFaceObserver('Pixel'); // 替换为你的自定义字体名称
        const loadImage = new Promise<void>((resolve) => {
            const img = new Image();
            img.src = 'https://pictures.axiomatrix.org/img3.wallspic.com-ni_ming_de-xu_gou_de_ren_wu-liang_dian-hei_ke-bei_guang-5333x3000.jpg'; // 替换为你的背景图 URL
            img.onload = () => resolve();
        });

        // 等待字体和背景图加载完成
        Promise.all([loadFont.load(), loadImage]).then(() => {
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <div className="w-full h-full bg-black flex justify-center items-center">
                <p className={"text-7xl"}>Loading...</p>
            </div>
        );
    }

    return <>{children}</>;
}