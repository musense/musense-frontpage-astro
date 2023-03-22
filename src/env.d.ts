/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_DESCRIPTION: string
    readonly EMAIL_SERVICE_KEY: string
    readonly EMAIL_TEMPLATE_KEY: string
    readonly EMAIL_PUBLIC_KEY: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}


interface EmailProps {
    service_key: string;
    template_key: string;
    public_key: string;
}