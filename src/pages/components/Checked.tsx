import Text from "@components/Text";
import { classNames } from "primereact/utils";
import { PropsWithChildren } from "react";
import { FaCheckCircle } from "react-icons/fa";

const CheckedText: React.FC<PropsWithChildren<{className?: string}>> = ({ children, className }) => <Text icon={<FaCheckCircle className={classNames({'text-success': !className}, className)} />}>{children}</Text>;

export default CheckedText



