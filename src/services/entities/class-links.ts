import { TABLE_NAMES } from '@src/db/table-names';
import { Contract } from '@src/entities/contract/contract.entity';
import { ContractBaseDto } from '@src/entities/contract/dto/contract.base.dto';
import { Customer } from '@src/entities/customer/customer.entity';
import { CustomerBaseDto } from '@src/entities/customer/dto/customer.base.dto';
import { MessageBaseDto } from '@src/entities/message/dto/message.base.dto';
import { Message } from '@src/entities/message/message.entity';

export interface ClassLink<T, C, B> {
  controllerName: string;
  entity?: new () => T;
  reguestDto?: new () => unknown;
  createDto?: new () => C;
  baseDto?: new () => B;
}
export type ClassLinksType = {
  [K in keyof typeof TABLE_NAMES]?: ClassLink<any, any, any>; // Використовуємо ключі з TABLE_NAMES
};

export const CLASS_LINKS: ClassLinksType = {
  [TABLE_NAMES.contract]: {
    controllerName: TABLE_NAMES.contract,
    entity: Contract,
    // reguestDto: undefined,
    baseDto: ContractBaseDto,
  },
  [TABLE_NAMES.customer]: {
    controllerName: TABLE_NAMES.customer,
    entity: Customer,
    // reguestDto: undefined,
    baseDto: CustomerBaseDto,
  },

  [TABLE_NAMES.message]: {
    controllerName: TABLE_NAMES.message,
    entity: Message,
    // reguestDto: undefined,
    baseDto: MessageBaseDto,
  },
};
