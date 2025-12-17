import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base =
        process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
        "http://localhost:3000";

    const now = new Date();

    const routes = [
        { path: "/", changeFrequency: "weekly", priority: 1 },
        { path: "/about", changeFrequency: "monthly", priority: 0.8 },
        { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
        { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
        { path: "/interpreter", changeFrequency: "monthly", priority: 0.6 },
    ] satisfies Array<{
        path: `/${string}`;
        changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
        priority: number;
    }>;

    return routes.map(({ path, changeFrequency, priority }) => ({
        url: `${base}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
    }));
}
