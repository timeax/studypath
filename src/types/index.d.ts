import { PAYMENT_CARDS, PAYMENT_INVOICE, PAYMENT_LINK, PAYMENT_SCRIPT, PAYMENT_TYGERBOOSTER } from "@assets/keys";
import { User } from "./model2";

export type PageProps<T extends Record<string, any> = Record<string, unknown>> = T & {
    auth: {
        user: User;
        roles: Role[]
    };

    flash: {
        message: any,
        alerts: any[];
        params: any;
        errors: any[];
        [x: string]: any
    }
};

export interface CryptoPaymentInvoice {
    amount: StringType;
    ref: string;
    order_id: string;
    currency: string;
    network: string;
    address: string;
    fee: StringType;
    percent: StringType;
    url?: string;
    available?: boolean
}

type Type<T, V> = { type: T, value: V };

interface CardPayProps<T extends boolean> {
    ui?: T;
    config: (T extends true ? {
        ui: string;
    } : {
        routes?: {
            auth?: string;
            card?: string;
            details?: string;
        }
    }) & ProcessPayment<{ title: string; amount: number }>
}

type ProcessPayment<Additional = Any> = {
    ref: string;
    route: string;
} & Additional

export type PaymentType =
    | Type<typeof PAYMENT_INVOICE, CryptoPaymentInvoice[]>
    | Type<typeof PAYMENT_CARDS, CardPayProps<false> | CardPayProps<true>>
    | Type<typeof PAYMENT_SCRIPT, string>
    | Type<typeof PAYMENT_TYGERBOOSTER, { onConfirm: string }>
    | Type<typeof PAYMENT_LINK, string>