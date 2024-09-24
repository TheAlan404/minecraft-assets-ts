export type MCBlockState = {
    variants?: Record<string, MCBlockStateVariantList>;
    multipart?: MCBlockStateCase[];
};

export type MCBlockStateVariantList = MCBlockStateVariant | (MCBlockStateVariant & { weight?: number })[];
export type MCBlockStateVariant = {
    model: string;
    x?: number;
    y?: number;
    uvlock?: boolean;
};

export type MCBlockStateCaseState = Record<string, string>;

export type MCBlockStateCase = {
    when?: { OR: MCBlockStateCaseState[] } | { AND: MCBlockStateCaseState[] } | MCBlockStateCaseState;
    apply: MCBlockStateVariantList;
};
