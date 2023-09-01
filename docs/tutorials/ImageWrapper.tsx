// @ts-ignore
import React from 'react';

// @ts-ignore
import useBaseUrl from '@docusaurus/useBaseUrl';
// @ts-ignore
import ThemedImage from '@theme/ThemedImage';

type Props = {
    url: string,
    height: number
}

export const ImageWrapper = ({ url, height }: Props) => {
    return <p style={{ display: "flex", justifyContent: "center" }}>
        <ThemedImage
            height={height}
            alt="Real-time video conferencing system architecture"
            sources={{
                light: useBaseUrl(url),
                dark: useBaseUrl(url),
            }}
        />
    </p>
};
