export const FIELDS_LENGTH = {
  NAME: 250,
  UUID: 36,
  EMAIL: 50,
  PHONE: 12,
  PERCENT: { PRECISION: 5, SCALE: 2 },
  DECIMAL: {
    PRECISION: 12,
    SCALE: 2,
  },
};

export const FIELDS_TYPES = {
  DECIMAL: {
    type: 'decimal' as const,
    precision: FIELDS_LENGTH.DECIMAL.PRECISION,
    scale: FIELDS_LENGTH.DECIMAL.SCALE,
    nullable: false,
    default: 0,
  },
  PERCENT: {
    type: 'decimal' as const,
    precision: FIELDS_LENGTH.PERCENT.PRECISION,
    scale: FIELDS_LENGTH.PERCENT.SCALE,
    nullable: true,
    default: 0,
  },
  NUMBER: {
    type: 'int' as const,
    nullable: false,
    default: 0,
  },

  BOOLEAN: {
    type: 'bit' as const,
    nullable: false,
    default: false,
  },

  UUID: {
    type: 'uniqueidentifier' as const,
    nullable: true,
    default: () => 'NEWID()',
  },

  TEXT_ROW: {
    type: 'varchar' as const,
    length: FIELDS_LENGTH.NAME,
    nullable: false,
    default: '',
  },
  NAME: {
    type: 'varchar' as const,
    length: FIELDS_LENGTH.NAME,
    nullable: false,
    default: '',
  },
  EMAIL: {
    type: 'varchar' as const,
    length: FIELDS_LENGTH.EMAIL,
    nullable: false,
    default: '',
  },
  PHONE: {
    type: 'varchar' as const,
    length: FIELDS_LENGTH.PHONE,
    nullable: false,
    default: '',
  },

  DATE: {
    type: 'datetime' as const,
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  },
  CREATED_AT: {
    name: 'createdAt',
    type: 'datetime2' as const,
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  },
  UPDATED_AT: {
    name: 'updatedAt',
    type: 'datetime2' as const,
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  },
};
