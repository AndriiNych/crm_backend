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
    type: 'decimal',
    precision: FIELDS_LENGTH.DECIMAL.PRECISION,
    scale: FIELDS_LENGTH.DECIMAL.SCALE,
    nullable: false,
    default: 0,
  },
  PERCENT: {
    type: 'decimal',
    precision: FIELDS_LENGTH.PERCENT.PRECISION,
    scale: FIELDS_LENGTH.PERCENT.SCALE,
    nullable: true,
    default: 0,
  },
  NUMBER: {
    type: 'int',
    nullable: false,
    default: 0,
  },

  UUID: {
    type: 'uniqueidentifier',
    nullable: true,
    default: () => 'NEWID()',
  },

  NAME: {
    type: 'varchar',
    length: FIELDS_LENGTH.NAME,
    nullable: false,
    default: '',
  },
  EMAIL: {
    type: 'varchar',
    length: FIELDS_LENGTH.EMAIL,
    nullable: false,
    default: '',
  },
  PHONE: {
    type: 'varchar',
    length: FIELDS_LENGTH.PHONE,
    nullable: false,
    default: '',
  },

  DATE: {
    type: 'datetime',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  },
  CREATED_AT: {
    name: 'createdAt',
    type: 'datetime2',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  },
  UPDATED_AT: {
    name: 'updatedAt',
    type: 'datetime2',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  },
};
