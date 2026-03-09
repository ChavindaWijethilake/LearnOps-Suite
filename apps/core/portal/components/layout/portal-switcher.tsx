'use client';

import * as React from 'react';
import { Check, ChevronsUpDown, LayoutDashboard, CreditCard, Activity, BookOpen, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useRouter, usePathname } from 'next/navigation';

const portals = [
    {
        value: 'dashboard',
        label: 'Command Center',
        icon: LayoutDashboard,
        path: '/',
    },
    {
        value: 'billing',
        label: 'Billing Engine',
        icon: CreditCard,
        path: '/billing',
    },
    {
        value: 'service',
        label: 'Service Command',
        icon: Activity,
        path: '/service',
    },
    {
        value: 'analytics',
        label: 'Live Dashboard',
        icon: Settings,
        path: '/analytics',
    },
    {
        value: 'student',
        label: 'Academic Hub',
        icon: BookOpen,
        path: '/student',
    },
];

export function PortalSwitcher() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Determine current portal from pathname
    const currentPortal = portals.find((p) => pathname.startsWith(p.path) && p.path !== '/') || portals[0];
    const [value, setValue] = React.useState(currentPortal.value);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between bg-[#1F2937] border-[#374151] text-[#E5E7EB] hover:bg-[#374151]"
                >
                    <div className="flex items-center gap-2">
                        {currentPortal.icon && <currentPortal.icon className="h-4 w-4" />}
                        {currentPortal.label}
                    </div>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 bg-[#1F2937] border-[#374151] text-[#E5E7EB]">
                <Command className="bg-transparent">
                    <CommandInput placeholder="Search portal..." className="text-[#E5E7EB]" />
                    <CommandList>
                        <CommandEmpty>No portal found.</CommandEmpty>
                        <CommandGroup>
                            {portals.map((portal) => (
                                <CommandItem
                                    key={portal.value}
                                    value={portal.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? '' : currentValue);
                                        setOpen(false);
                                        router.push(portal.path);
                                    }}
                                    className="text-[#E5E7EB] hover:bg-[#374151] cursor-pointer"
                                >
                                    <portal.icon className={cn("mr-2 h-4 w-4", value === portal.value ? "opacity-100" : "opacity-50")} />
                                    {portal.label}
                                    <Check
                                        className={cn(
                                            'ml-auto h-4 w-4',
                                            value === portal.value ? 'opacity-100' : 'opacity-0'
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
