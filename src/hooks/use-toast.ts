
import { useToast as useToastOriginal, toast as toastOriginal } from "@radix-ui/react-toast";

// Export with our own names to avoid circular dependencies
export const useToast = useToastOriginal;
export const toast = toastOriginal;
