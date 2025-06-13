import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Briefcase, Users, Building, TrendingUp } from 'lucide-react'

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Tìm việc làm <span className="text-primary">mơ ước</span> của bạn
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Khám phá hàng nghìn cơ hội nghề nghiệp từ các công ty hàng đầu. 
            Ứng tuyển dễ dàng và nhanh chóng chỉ với vài click.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Nhập vị trí công việc, kỹ năng..."
                  className="border-0 text-lg h-12"
                />
              </div>
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Địa điểm"
                  className="border-0 text-lg h-12"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                <Search className="mr-2 h-5 w-5" />
                Tìm kiếm
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Việc làm</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Công ty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Ứng viên</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Tỷ lệ thành công</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tại sao chọn RecruitPortal?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Chúng tôi mang đến giải pháp tuyển dụng toàn diện cho cả ứng viên và nhà tuyển dụng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Việc làm chất lượng</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hàng nghìn vị trí từ các công ty uy tín với mức lương hấp dẫn
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Ứng tuyển dễ dàng</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quy trình ứng tuyển đơn giản, nhanh chóng chỉ với 1 click
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Cơ hội phát triển</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gợi ý việc làm phù hợp dựa trên kỹ năng và kinh nghiệm của bạn
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng bắt đầu hành trình mới?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tham gia cộng đồng hơn 50,000 ứng viên và nhà tuyển dụng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to={ROUTES.REGISTER}>
                Đăng ký miễn phí
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={ROUTES.JOBS}>
                Khám phá việc làm
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}