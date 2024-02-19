import { CardMinimize } from "@/components/card-minimize";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}
export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={cn(className)}>
      <Card className="h-fit mb-6">
        <CardHeader className="text-24 font-bold">
          QUAN ĐIỂM - TRANH LUẬN
        </CardHeader>
        <div className="px-6">
          <CardTitle>Nội dung cho phép</CardTitle>
          <CardDescription>
            Các nội dung thể hiện góc nhìn, quan điểm đa chiều về các vấn đề
            kinh tế, văn hoá – xã hội trong và ngoài nước.
          </CardDescription>
          <CardTitle>Quy định</CardTitle>
          <CardDescription>
            <ul>
              <li className="list-inside list-disc">
                Những nội dung không thuộc phạm trù của danh mục sẽ bị nhắc nhở
                và xoá (nếu không thay đổi thích hợp)
              </li>
              <li className="list-inside list-disc">
                Nghiêm cấm spam, quảng cáo
              </li>
              <li className="list-inside list-disc">
                Nghiêm cấm post nội dung 18+ hay những quan điểm cực đoan liên
                quan tới chính trị - tôn giáo
              </li>
              <li className="list-inside list-disc">
                Nghiêm cấm phát ngôn thiếu văn hoá và đả kích cá nhân. Nghiêm
                cấm bài đăng không ghi rõ nguồn nếu đi cóp nhặt.
              </li>
            </ul>
          </CardDescription>
        </div>
      </Card>
      <Card>
        <CardHeader className="text-14 font-semibold">
          CÓ THỂ BẠN QUAN TÂM
        </CardHeader>
        <CardContent>
          <CardMinimize />
          <CardMinimize />
          <CardMinimize />
        </CardContent>
        <Separator />
      </Card>
    </div>
  );
};
