import ContentLoader from 'react-content-loader'

export const Skeleton = () => {
    return (
        <ContentLoader speed={2} width={280} height={500} viewBox="0 0 280 500" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
            <circle cx="134" cy="136" r="125" />
            <rect x="0" y="270" rx="5" ry="5" width="280" height="24" />
            <rect x="0" y="313" rx="10" ry="10" width="280" height="86" />
            <rect x="0" y="428" rx="10" ry="10" width="90" height="27" />
            <rect x="125" y="418" rx="25" ry="25" width="155" height="45" />
        </ContentLoader>
    )
}
