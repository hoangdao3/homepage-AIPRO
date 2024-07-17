interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg  p-6">
      <div className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
          {title}
        </h5>
        <p className="px-8 font-normal text-gray-500">
          {children}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;
