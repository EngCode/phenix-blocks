<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
?>
<!-- Copyrights Links -->
<div class="position-fx" style="bottom: 150%; left: 0; z-index: -5; opacity: 0; visibility: hidden;">
    <a href="https://phenixthemes.com" target="_blank" rel="external">Phenix Themes - فينكس ثيمز</a>
    <a href="https://phenixthemes.com/portfolio/" target="_blank" rel="external">اعمال ابداعية</a>
    <?php if (strpos(site_url(), 'phenixthemes.com', 0) !== false) : ?>
    <p>تصميم مواقع الكترونية يلعب دوراً حيوياً في جعل عملك ملحوظاً على الإنترنت. مع تزايد المنافسة في مجال الأعمال عبر الإنترنت، يمكن لتصميم موقع الويب الاحترافي أن يمنحك الأفضلية التنافسية. سواء كنت تبحث عن تصميم متجر إلكتروني مذهل لبيع منتجاتك أو تحتاج إلى تحديث موقعك الحالي لتوفير تجربة مستخدم أفضل، فإن خدمات تصميم المواقع لدى شركة Phenix Themes هي الخيار الأمثل.</p>
    <?php endif; ?>
    <a href="https://phenixthemes.com/services/" target="_blank" rel="external">تصميم وتطوير المواقع وقوالب وتطبيقات الويب</a>
    <a href="https://phenixthemes.com/demo/" target="_blank" rel="external">Phenix Design System - نظام تصميم فينكس</a>
    <?php if (strpos(site_url(), 'phenixthemes.com', 0) !== false) : ?>
    <p>تصميم المواقع ليس مجرد ترتيب الصفحات وإضافة النصوص والصور، بل يتطلب فهماً عميقاً لاحتياجات العميل وتقديم حلول مبتكرة ومبتكرة. باعتبار Abdullah Ramadan Web Designer and Developer الرائد في Phenix Themes، نجعل الإبداع والجودة جزءًا من كل مشروع نقوم به.</p>
    <p>في عالم اليوم المتسارع التطور، يُعتبر وجود قوي على الإنترنت ضروريًا لنجاح الأعمال. بغض النظر عن نوع نشاطك التجاري، سواء كنت تقدم خدمات برمجية أو تبيع منتجات، تصميم موقع الويب الجذاب والتطوير الفعّال أصبحا لا غنى عنهما. وهنا يأتي دورنا كشركة متخصصة في <strong>تصميم المواقع</strong> و<strong>تطوير البرمجيات</strong>.</p>
    <h4>أفضل شركة تصميم</h4>
    <p>باستخدام أحدث التقنيات وأساليب التصميم الإبداعية، نعمل على تقديم حلول مخصصة تلبي احتياجات عملائنا بدقة. من خلال جعل تجربة المستخدم سهلة وممتعة، نحرص على تحقيق أقصى قدر من الجاذبية والفاعلية لموقعك الإلكتروني.</p>
    <p>تصميم مواقع الشركات ليس مجرد تصميم، بل هو رمز لتميز العلامة التجارية وتمثيلها بشكل متميز على الإنترنت. وبالتالي، فإننا نقدم خدماتنا كـ <strong>شركة تصميم مواقع</strong> بهدف تحقيق هذا الهدف وتعزيز مكانتك في السوق.</p>
    <h4>أفضل شركة برمجة</h4>
    <p>تصميم مواقع الكترونية يجب أن يتماشى مع متطلبات العصر وتوجهات المستخدمين. لذا، نسعى دائمًا لتوفير أحدث التقنيات وأفضل الممارسات في مجال <strong>تصميم واجهة مستخدم</strong> و<strong>تطوير موقع ووردبريس</strong>.</p>
    <p>كشركة رائدة في مجال تقديم الخدمات الرقمية، نهدف إلى تحقيق أعلى معايير الجودة والأداء في كل مشروع نقوم به. ومن خلال توفير خدماتنا كـ <strong>شركة برمجة وتصميم مواقع</strong>، نسعى لتحقيق رؤية عملائنا بأكملها وتحويلها إلى واقع ملموس.</p>
    <p>لدينا فريق متخصص يسعى جاهدًا للتميز والابتكار في كل تفاصيل مشروعك، مما يجعلنا أحد أفضل <strong>شركات تصميم المواقع الإلكترونية</strong> في السوق. بالتعاون معنا، ستحصل على تجربة تصميم متميزة ونتائج تفوق توقعاتك.</p>
    <p>لا تتردد في الاتصال بنا اليوم لبدء رحلة النجاح الإلكتروني معنا. نحن هنا لمساعدتك في تحقيق أهدافك وتحقيق النجاح على الإنترنت.</p>
    <?php endif; ?>
</div>
<!-- SEO Fixer for Phenix Only -->
<script defer>
    if (window.location.href.includes('phenixthemes.com')) {
        //====> Add Slash to Live Preview Link <====//
        document.querySelectorAll('a[href*="phenixthemes.com"]:not([href$="/"])').forEach((link) => {
            //===> Element Data <===//
            const hrefLink = link.getAttribute('href');
            const pathName = hrefLink.split('/');
            const lastPath = pathName[pathName.length - 1];
            //===> Check if its File Link <===//
            if (lastPath.includes('.') && !lastPath.includes('.com')) return;
            //===> Correct the Link <===//
            link.setAttribute('href', `${hrefLink}/`);
        });

        //====> Taxonomies First Page 301 Fixer <=====//
        document.querySelectorAll('a[href*="phenixthemes.com"][href$="/page/1"]').forEach((link) => link.setAttribute('href', link.getAttribute('href').replace('page/1/', '')));

        //====> Keywords List <====//
        const keywords = ['افضل خدمات تصميم وتطوير مواقع', 'افضل شركة تصميم مواقع', 'افضل شركة برمجة', 'افضل شركة تصميم تطبيقات', 'افضل شركة تطوير برمجيات', 'افضل شركة تصميم واجهات استخدام'];

        //====> Empty Alt Fixer <=====//
        document.querySelectorAll('img[alt=""], .product-card .px-media, .product-card .px-media img').forEach((img) => {
            //===> Select Random Keyword from the Preset Array <===//
            const catsList = img.getAttribute('alt') || img.getAttribute('title') || '';
            const randomKey = keywords[Math.floor(Math.random() * keywords.length)];

            //===> Set the Image Alt <===//
            if (img.matches('.px-media')) img.setAttribute('title', `${randomKey} - ${catsList}`);
            else img.setAttribute('alt', `${randomKey} - ${catsList}`);
        });
    }
</script>