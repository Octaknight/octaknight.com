export interface MaterialSpec {
    label: string;
    value: string;
}

export interface SizeWeightSpec {
    label: string;
    value: string;
}

export interface ModelSpecs {
    modelName: string;
    displayName: string;
    subtitle: string;
    materials: MaterialSpec[];
    certifications: {
        ce: boolean;
        fc: boolean;
    };
    recyclable: string;
    description: string;
    sizeAndWeight: SizeWeightSpec[];
    specImages: {
        front: string;
        right: string;
        left: string;
        back: string;
    };
}

export const aotmSpecs: Record<'AOTM_I' | 'AOTM_XL', ModelSpecs> = {
    AOTM_I: {
        modelName: 'AOTM_I',
        displayName: 'AOTM I',
        subtitle: 'Standard Capacity',
        materials: [
            { label: 'Front', value: 'Painted aluminum 6K series' },
            { label: 'Back', value: 'Anodized aluminum 6K series' },
            { label: 'Clip', value: 'Premium silicone rubber' },
            { label: 'Glass', value: 'Chemically-strengthened glass' },
        ],
        certifications: {
            ce: true,
            fc: true,
        },
        recyclable: '96%',
        description: 'The AOTM I is engineered for precision and durability, setting new standards in automated tool management.',
        sizeAndWeight: [
            { label: 'Footprint (L×W×H)', value: '1030 × 685 × 555 mm' },
            { label: 'Weight', value: '~85 kg' },
            { label: 'Capacity', value: '102 slots' },
            { label: 'Max Inserts', value: '~4,500 (5mm thick)' },
            { label: 'Power', value: '110-240V AC, 50/60Hz' },
            { label: 'Internal Volume', value: '~390L' },
        ],
        specImages: {
            front: '/assets/aotm/spec/AOTM_I_specs/AOTM_I_Mini_Front.svg',
            right: '/assets/aotm/spec/AOTM_I_specs/AOTM_I_Mini_Right.svg',
            left: '/assets/aotm/spec/AOTM_I_specs/AOTM_I_Mini_Left.svg',
            back: '/assets/aotm/spec/AOTM_I_specs/AOTM_I_Mini_Back.svg',
        },
    },
    AOTM_XL: {
        modelName: 'AOTM_XL',
        displayName: 'AOTM XL',
        subtitle: 'High Capacity',
        materials: [
            { label: 'Front', value: 'Painted premium aluminum 8K series' },
            { label: 'Back', value: 'Anodized premium aluminum 8K series' },
            { label: 'Clip', value: 'Premium silicone rubber XL' },
            { label: 'Glass', value: 'Chemically-strengthened glass XL' },
        ],
        certifications: {
            ce: true,
            fc: true,
        },
        recyclable: '94%',
        description: 'The AOTM XL features enhanced capacity and reinforced construction for high-demand industrial environments.',
        sizeAndWeight: [
            { label: 'Footprint (L×W×H)', value: '1030 × 685 × 940 mm' },
            { label: 'Weight', value: '~120 kg' },
            { label: 'Capacity', value: '204 slots' },
            { label: 'Max Inserts', value: '~9,000 (5mm thick)' },
            { label: 'Power', value: '110-240V AC, 50/60Hz' },
            { label: 'Internal Volume', value: '~665L' },
        ],
        specImages: {
            // Using AOTM I images as placeholders until XL images are ready
            front: '/assets/aotm/spec/AOTM_I_specs/AOTM_I_Mini_Front.svg',
            right: '/assets/aotm/spec/AOTM_I_specs/AOTM_I_Mini_Right.svg',
            left: '/assets/aotm/spec/AOTM_I_specs/AOTM_I_Mini_Left.svg',
            back: '/assets/aotm/spec/AOTM_I_specs/AOTM_I_Mini_Back.svg',
        },
    },
};
